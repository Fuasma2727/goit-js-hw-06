const decrementButton = document.getElementById("counter").querySelector('[data-action="decrement"]');
const incrementButton = document.getElementById("counter").querySelector('[data-action="increment"]');
const counterValue = document.getElementById("value");
let value = 0;
function add (){
    value = value + 1;
    counterValue.textContent = value;

} 
function rest (){
    value = value - 1;
    counterValue.textContent = value;
} 

decrementButton.addEventListener("click", rest);
incrementButton.addEventListener("click", add);