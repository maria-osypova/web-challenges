console.clear();

const box = document.querySelector('[data-js="box"]');
const inputColor = document.querySelector('[ data-js="input-color"]');
const inputBorder = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');

inputColor.addEventListener("input", () => {
  const hue = inputColor.value;
  box.style.backgroundColor = `hsl(${hue}, 50%, 20%)`;
});

inputBorder.addEventListener("input", () => {
  const border = inputBorder.value;
  box.style.borderRadius = border === "50%" ? "50%" : `${border}%`;
});

inputRotation.addEventListener("input", () => {
  const rotation = inputRotation.value;
  box.style.transform = `rotate(${rotation}deg)`;
});
