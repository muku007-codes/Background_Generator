const digi_num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const button2 = document.getElementById("btn2");
const search = document.getElementById("search");
const input = document.getElementById("input");
const rgb = document.getElementById("rgb_value");

var hexColor = "#";

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

button.addEventListener("click", () => {
  for (i = 0; i < 6; i++) {
    hexColor += digi_num[randomNumber(0, 15)];
  }
  document.body.style.backgroundColor = hexColor;
  rgb.innerHTML = document.body.style.backgroundColor;
  hexColor = "#";
});

button2.addEventListener("click", () => {
  let hexColor = input.value;
  document.body.style.backgroundColor = hexColor;
  rgb.innerHTML = document.body.style.backgroundColor;
  hexColor = "#";
});
