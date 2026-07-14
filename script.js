const registerBtn = document.getElementById("showRegister");
const loginBtn = document.getElementById("showLogin");

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

registerBtn.onclick = () => {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
};

loginBtn.onclick = () => {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
};
