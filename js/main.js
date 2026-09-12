// ==========================================
// REFERENCES
// ==========================================
const refs = {
  userNameInput: document.querySelector("#username-input"),
  userNameError: document.querySelector("#username-error"),
  passwordInput: document.querySelector("#password-input"),
  loginForm: document.querySelector("#login-form"),
  submitUsername: document.querySelector("#submit-username"),
  submitPassword: document.querySelector("#submit-password"),
};
// ==========================================
// TASK-1: Username Validator
// ==========================================
refs.userNameInput.addEventListener("input", () => {
  if (refs.userNameInput.value === "") {
    refs.userNameError.textContent = "";
  } else if (refs.userNameInput.value.length < 5) {
    refs.userNameError.textContent =
      "Username must be at least 5 characters long";
    refs.userNameInput.style.color = refs.userNameError.style.color = "red";
  } else {
    refs.userNameError.textContent = "Username is valid!";
    refs.userNameInput.style.color = "black";
    refs.userNameError.style.color = "green";
  }
});
// ==========================================
// TASK-2: Focus Highlighter
// ==========================================

refs.passwordInput.addEventListener("focus", () => {
  refs.passwordInput.style.borderColor = "red";
});
refs.passwordInput.addEventListener("blur", () => {
  refs.passwordInput.style.borderColor = "grey";
});
// ==========================================
// TASK-3: Safe Form Submitter
// ==========================================
refs.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { username, password } = event.currentTarget.elements;
  const formData = {
    name: username.value,
    password: password.value,
  };
  console.log(formData);
  refs.loginForm.reset();
});
