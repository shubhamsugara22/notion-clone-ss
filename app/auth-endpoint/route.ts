import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest){
	auth.protect(); //Ensure user is authenticated

	const { sessionClaims } = await auth();

	const { room } = await req.json();

	const session = liveblocks
}