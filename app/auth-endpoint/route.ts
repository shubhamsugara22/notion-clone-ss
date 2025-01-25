import liveblocks from "@/lib/liveblocks";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { adminDb } from "@/firebase-admin";


export async function POST(req: NextRequest) {
	await auth.protect(); //Ensure user is authenticated

	const { sessionClaims } = await auth();
	const { room } = await req.json();

	const session = liveblocks.prepareSession(sessionClaims?.email, {
		userInfo: {
			name: sessionClaims?.fullName || "unknown user",
			email: sessionClaims?.email || "",
			avatar: sessionClaims?.image || "",
		},
	});

	const usersInRoom = await adminDb
	    .collectionGroup("rooms")
	    .where("userId", "==", sessionClaims?.email)
	    .get();
	
	const userInRoom = usersInRoom.docs.find((doc) => doc.id === room);
	
	if (userInRoom?.exists) {
		session.allow(room, session.FULL_ACCESS);
		const { body, status } = await session.authorize();
		return new Response(body, { status });
	} else {
		return NextResponse.json(
			{ message: "You are not in this room" },
			{ status: 403 }
		);
	}
}