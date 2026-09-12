// ==========================================
// REFERENCES
// ==========================================
const refs = {
  coordsBox: document.querySelector("#coords-box"),
  coordsText: document.querySelector("#coords-text"),
  menuTitle: document.querySelector("#menu-title"),
};

// ==========================================
// TASK 1: Interactive Coordinates Tracker
// ==========================================

refs.coordsBox.addEventListener("mousemove", (event) => {
  const { offsetX, offsetY } = event;

  refs.coordsText.textContent = `Move your mouse here to track coordinates: X:${offsetX} Y: ${offsetY}`;
});
refs.coordsBox.addEventListener("mouseleave", () => {
  refs.coordsText.textContent =
    "Move your mouse here to track coordinates: X:0 Y: 0";
});

// ==========================================
// TASK 2: Custom Context Menu Preventer
// ==========================================

refs.menuTitle.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  alert("Custom actions will be here soon!");
});
