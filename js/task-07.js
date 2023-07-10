let deslizador = document.getElementById("font-size-control");
let texto = document.getElementById("text");


deslizador.addEventListener("input",function(){
  texto.style.fontSize = deslizador.value + "px";
});
