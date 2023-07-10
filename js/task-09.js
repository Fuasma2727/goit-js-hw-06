function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let color = document.querySelector(".color");
let boton = document.querySelector(".change-color");

boton.addEventListener("click",function(){

  color.style.backgroundColor = getRandomHexColor();

})