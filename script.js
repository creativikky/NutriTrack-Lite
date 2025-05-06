
import { auth } from './firebase-config.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup
} from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js';

window.login = async function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    location.href = 'dashboard.html';
  } catch (error) {
    document.getElementById('login-error').innerText = "Login failed: " + error.message;
  }
};

window.signup = async function () {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup complete! Logging you in...");
    location.href = 'dashboard.html';
  } catch (error) {
    document.getElementById('signup-error').innerText = "Signup failed: " + error.message;
  }
};

window.resetPassword = async function () {
  const email = document.getElementById('email').value;
  if (!email) {
    document.getElementById('login-error').innerText = 'Please enter your email to reset password.';
    return;
  }
  try {
    await sendPasswordResetEmail(auth, email);
    document.getElementById('login-error').innerText = 'Password reset email sent. Check your inbox.';
  } catch (error) {
    document.getElementById('login-error').innerText = "Error: " + error.message;
  }
};

const dashboardPage = location.pathname.endsWith("dashboard.html");
if (dashboardPage) {
  window.logout = async function () {
    await signOut(auth);
    alert("Logged out successfully!");
    location.href = 'index.html';
  };

  onAuthStateChanged(auth, user => {
    if (!user) {
      location.href = 'index.html';
    } else {
      const calories = 1200;
      const protein = 40;
      document.getElementById('calProgress').value = calories;
      document.getElementById('calLabel').innerText = `${calories} / 2000 kcal`;
      document.getElementById('proteinProgress').value = protein;
      document.getElementById('proteinLabel').innerText = `${protein} / 65 g`;
    }
  });
}

const googleProvider = new GoogleAuthProvider();
const googleLoginBtn = document.getElementById('google-login');
if (googleLoginBtn) {
  googleLoginBtn.addEventListener('click', async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google login successful!");
      location.href = 'dashboard.html';
    } catch (error) {
      document.getElementById('login-error').innerText = "Google login failed: " + error.message;
    }
  });
}
