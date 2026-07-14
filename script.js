import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCL8vjtmJtSIJyax22qaRb3as2UPvmcVEE",
  authDomain: "global-pay-panel.firebaseapp.com",
  projectId: "global-pay-panel",
  storageBucket: "global-pay-panel.firebasestorage.app",
  messagingSenderId: "50490595463",
  appId: "1:50490595463:web:69457a3db6634522b3c022",
  measurementId: "G-ENPBE841ZT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const registerBtn = document.getElementById("showRegister");
const loginBtn = document.getElementById("showLogin");

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

registerBtn.addEventListener("click", () => {
  registerForm.style.display = "block";
  loginForm.style.display = "none";

  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
});

loginBtn.addEventListener("click", () => {
  registerForm.style.display = "none";
  loginForm.style.display = "block";

  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
});
document.getElementById("googleLoginBtn").addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    alert("Welcome " + (result.user.displayName || result.user.email));

    window.location.href = "dashboard.html";

  } catch (error) {
    alert("Google Login Failed: " + error.message);
  }
});
