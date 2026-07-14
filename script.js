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
