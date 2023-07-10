let form = document.querySelector(".login-form");
form.addEventListener("submit",function(event){
    event.preventDefault();
let inputName = form.elements["email"].value;
let inputPassword = form.elements["password"].value;

if (inputName === "" || inputPassword === "") {
    return alert("Please fill in all the fields!");
}
console.log(inputName);
console.log(inputPassword);

form.reset();

});

