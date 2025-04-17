import "server-only";
import { cert, initializeApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

const privateKey = process.env.FIREBASE_PRIVATE_KEY_BASE64
    ? Buffer.from(process.env.FIREBASE_PRIVATE_KEY_BASE64, "base64").toString("utf-8")
    : undefined;

export const firebaseCert = cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey,
});

if (!getApps().length) {
    initializeApp({
        credential: firebaseCert,
        // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });
}

export const db = getFirestore();
// export const storage = getStorage().bucket();
