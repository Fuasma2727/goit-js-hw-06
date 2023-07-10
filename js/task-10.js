
document.addEventListener('DOMContentLoaded', () => {


const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const container = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const createBoxes = (num) => {
  for (let i = 0; i < num; i++) {
    const div = document.createElement('div');
    div.style.width = 30+i*10 + "px";
    div.style.height = 30+i*10 + "px";
    div.style.backgroundColor = getRandomHexColor();
    container.appendChild(div);
  }
};
const destroyBoxes = () => {
  container.innerHTML = '';
};

createButton.addEventListener('click', () => {
  const amount = parseInt(document.querySelector('input[type="number"]').value);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});

});
