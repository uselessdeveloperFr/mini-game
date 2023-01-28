const board = document.querySelector("#board");
const SQUARE_NUMBER = 400;
const colors = [
  "#3a86ff",
  "#064AB8",
  "#56DE02",
  "#58E600",
  "#FA2878",
  "#3a86ff",
  "#e63946",
];

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  board.append(square);

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });
}

function setColor(el) {
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}`;
}

function removeColor(el) {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
