let inputValidation = document.querySelector("#validation-input");
function validation (){
if (inputValidation.value.length == inputValidation.getAttribute('data-length')){
    inputValidation.classList.remove('invalid');
    inputValidation.classList.add('valid');

}
else{
    inputValidation.classList.remove('valid');
    inputValidation.classList.add('invalid');
    
}
};

inputValidation.addEventListener('blur', validation);