import { getDatabase, ref, set, get, child } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	authDomain: "sited-b.firebaseapp.com",
	projectId: "sited-b",
	storageBucket: "sited-b.appspot.com",
	measurementId: "G-9XFXZ789BG"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };