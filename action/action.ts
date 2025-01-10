'use server';

import { adminDb } from '@/firebase-admin';
import { auth } from '@clerk/nextjs/server';

export async function createNewDocument() {
    auth().protect();

	const { sessionClaims } = await auth();

	const docCollectorRef = adminDb.collection("documents");

	const docRef = await docCollectorRef.add({
		title : "New Doc"
    })

	await adminDb.collection('users').doc(sessionClaims?.email!)
}