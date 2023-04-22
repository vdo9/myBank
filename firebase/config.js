import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyA0UrnFYX5D6novnD97H1eTsu0k3BumhJc',
  authDomain: 'com.reactnativefirebase',
  projectId: 'mybank-7ff92',
  storageBucket: 'mybank-7ff92.appspot.com',
  messagingSenderId: '648310192428',
  appId: '1:648310192428:ios:2b7115ffc271bd6d8fd489',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;