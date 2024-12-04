// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBTpWuJnQY9hKWNpCpdD9c4ofvR7Zsmtko',
  authDomain: 'attendme-6a93f.firebaseapp.com',
  projectId: 'attendme-6a93f',
  storageBucket: 'attendme-6a93f.appspot.com',
  messagingSenderId: '164946438757',
  appId: '1:164946438757:web:67a5125dce300035d5f48c',
  measurementId: 'G-VSVSG4Y406',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;