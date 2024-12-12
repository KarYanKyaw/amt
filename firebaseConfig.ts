import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_VI_PBvKfIf_NzMuYm139UYpnJwkhLLw",
  authDomain: "authframe-5077e.firebaseapp.com",
  projectId: "authframe-5077e",
  storageBucket: "authframe-5077e.firebasestorage.app",
  messagingSenderId: "607601115272",
  appId: "1:607601115272:web:81f268271c086b1b05df3d",
  measurementId: "G-K38RQ7Q57N",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
