let items = document.querySelectorAll(".item");

console.log("numero de categorias", items.length);

let listado = document.querySelectorAll("#categories > li");

listado.forEach((element) => {
console.log("Category:" + element.firstElementChild.textContent);
console.log("Elements:" + element.lastElementChild.children.length);

});