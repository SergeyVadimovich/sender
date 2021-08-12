// validation
document.addEventListener('DOMContentLoaded', function(){

  'use strict';

  const validForm = document.querySelector('.form--js');

  const formInput = validForm.querySelectorAll('.form__input');

  const pattern = /^[a-zA-Z0-9.!#$%&'*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;

  const inputArr = Array.from(formInput);

  function checkForEmail(value){
    return pattern.test(value);
  }
  function checkForRequired(value){
    return !value;
  }
  function checkForLength(value){
    const minLength = 6;
    return value.length < minLength;
  }

  function validation(){
    for(var i = 0; i <= inputArr.length; i++){
      var curentInput = inputArr[i];
      var isEmpty;
      var invalidEmail;
      var incorrectLenght;
      if(curentInput.getAttribute('type') === 'text'){
        isEmpty = checkForRequired(curentInput.value)
        }
      if(curentInput.getAttribute('type') === 'email'){
        isEmpty = checkForRequired(curentInput.value);
        invalidEmail = checkForEmail(curentInput.value);
        } 
      if(curentInput.getAttribute('type') === 'password'){
          incorrectLenght = checkForLength(curentInput.value);
        }
      if(curentInput.getAttribute('type') === 'checkbox'){
          isEmpty = !curentInput.checked;
        }
      // empty error
      if(isEmpty){
        var errorMessage = document.createElement('span');
        errorMessage.innerHTML = 'This field is required';
        errorMessage.classList.add('error__message');
        curentInput.insertAdjacentElement('afterend', errorMessage);
      }
      // invalid mail error
      if(invalidEmail){
        var errorMail = document.createElement('span');
        errorMail.innerHTML = 'Please, enter a valid email (e.g. name@example.com)';
        errorMail.classList.add('error__message');
        curentInput.insertAdjacentElement('afterend', errorMail);
      }
      // invalid password error
      if(incorrectLenght){
        var errorPass = document.createElement('span');
        errorPass.innerHTML = 'Password must be at least 6 characters';
        errorPass.classList.add('error__message');
        curentInput.insertAdjacentElement('afterend', errorPass);
      }
    }
  }

  function removeError(){
    var errors = document.querySelectorAll('.error__message');
    for(let i= 0; i <= errors.length; i++){
        errors[i]?.remove();
      }  
      validation();
  }

  validForm.addEventListener('submit', function(e) {
    e.preventDefault();
    removeError();
  });
});
  
