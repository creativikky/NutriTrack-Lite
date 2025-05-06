import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyBpmurxYdJpAzOzUVALHqTojYR7ULiIPEM",
  authDomain: "nutritrack-lite-795b2.firebaseapp.com",
  projectId: "nutritrack-lite-795b2",
  storageBucket: "nutritrack-lite-795b2.firebasestorage.app",
  messagingSenderId: "1089632956766",
  appId: "1:1089632956766:web:be972b8f74b079e6609fcf",
  measurementId: "G-P5R1VXPY3E"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
