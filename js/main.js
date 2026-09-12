const refs = {
  coordsBox: document.querySelector("#coords-box"),
  coordsText: document.querySelector("#coords-text"),
};

refs.coordsBox.addEventListener("mousemove", (event) => {
  const { offsetX, offsetY } = event;

  refs.coordsText.textContent = `Move your mouse here to track coordinates: X:${offsetX} Y: ${offsetY}`;
});
