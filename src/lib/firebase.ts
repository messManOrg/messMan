import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: process.env.REACT_APP_apiKey,
   authDomain: 'mess-man.firebaseapp.com',
   projectId: 'mess-man',
   storageBucket: 'mess-man.appspot.com',
   messagingSenderId: process.env.REACT_APP_messagingSenderId,
   appId: process.env.REACT_APP_appId,
   measurementId: process.env.REACT_APP_measurementId,
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics();
export const auth = getAuth();
export const db = getFirestore();

if (process.env.NODE_ENV === 'development') {
   connectAuthEmulator(auth, 'http://localhost:9099');
   connectFirestoreEmulator(db, 'localhost', 8080);
}
