let input = document.getElementById("name-input");
let output = document.getElementById("name-output");

input.addEventListener("input",function(){
    if (input.value === ""){
        output.textContent = "Anonimo";
        }
        else{
            output.textContent = input.value;
        }
});


