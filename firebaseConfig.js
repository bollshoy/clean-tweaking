import { getDatabase, ref, set, get, child } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
};

console.log('Firebase Configuration:', firebaseConfig);

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };