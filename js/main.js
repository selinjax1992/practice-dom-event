// ==========================================
//  TASK1: "Interactive Product Card" (Properties & Attributes)
// ==========================================
const refs = {
  productImg: document.querySelector("#product-img"),
  productTitle: document.querySelector("#product-title"),
  actionBtn: document.querySelector("#action-btn"),
  todoList: document.querySelector("#todo-list"),
  alertBox: document.querySelector("#alert-box"),
  closeAlertBtn: document.querySelector("#close-alert-btn"),
  body: document.querySelector("body"),
};
refs.productImg.src = "https://picsum.photos/200/300";
refs.productTitle.textContent = "Awesome Tech Gadget";
if (refs.actionBtn.dataset.status === "available") {
  refs.actionBtn.classList.add("btn-success");
  refs.actionBtn.textContent = "Add to Cart";
}

// ==========================================
// TASK 2: Dynamic Todo List
// ==========================================
const tasks = [
  "Learn DOM attributes",
  "Master element creation",
  "Push code to the branch",
];
tasks.forEach((task) => {
  const li = document.createElement("li");
  li.textContent = task;
  li.classList.add("todo-item");
  refs.todoList.append(li);
});

// ==========================================
// TASK 3: Alert Box with Dismiss Option
// ==========================================
// ~ Version 1: Using remove() method
// const onCloseBtnClick = () => {
//   refs.alertBox.remove();
// };
// ~ Version 2: Using removeChild() method
const onCloseBtnClick = () => {
  refs.body.removeChild(refs.alertBox);
};

refs.closeAlertBtn.addEventListener("click", onCloseBtnClick);
