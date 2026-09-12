// ==========================================
// REFERENCES
// ==========================================
const refs = {
  userNameInput: document.querySelector("#username-input"),
  userNameError: document.querySelector("#username-error"),
};
// ==========================================
// TASK-1: Username Validator
// ==========================================
refs.userNameInput.addEventListener("input", () => {
  if (refs.userNameInput.value.length < 5) {
    refs.userNameError.textContent =
      "Username must be at least 5 characters long";
    refs.userNameInput.style.color = refs.userNameError.style.color = "red";
  } else {
    refs.userNameError.textContent = "Username is valid!";
    refs.userNameInput.style.color = "black";
    refs.userNameError.style.color = "green";
  }
});
