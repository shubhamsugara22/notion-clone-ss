import {
	intializeApp,
	getApps,
	App,
	getApp,
	cert,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const serviceKey = require("@/serviceKey.json");

let app: App;

if (getApps().length === 0) {
	app = intializeApp({
		credential: cert(serviceKey),
	});
} else {
	app = getApp();
}

const adminDb = getFirestore(app);

export { app as adminApp, adminDb };;