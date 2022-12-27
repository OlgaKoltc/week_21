let errors = [];
let name = document.querySelector('#name');
let surname = document.querySelector('#surname');
let email = document.querySelector('#login');
let password1 = document.querySelector('#password1');
let password2 = document.querySelector('#password2');
//let password = document.querySelector('#password1');
let user;
let btn = document.querySelector('button');
btn = addEventListener('click', checkAll);

function checkValidity(input) {
let validity = input.validity;
if (validity.valueMissing) {
    errors.push('Поле ' + input.placeholder + ' не заполнено');
  input.value = "";
  }
if (validity.patternMismatch) {
        errors.push('Поле ' + input.placeholder + ' заполненно неправильно');
        input.value = "";
      }  
if (validity.typeMismatch) {
            errors.push('Поле ' + input.placeholder + ' заполненно неправильно');
            input.value = "";
          }  
if (validityState.tooShort) {
            errors.push(input.placeholder + 'должен содержать не менее 8 символов');
            input.value = "";
          }           
}

function checkAll(e) {
  e.preventDefault();
    errors = [];
    let inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        checkValidity(input);
    }
    document.querySelector('#errorsInfo').innerHTML = errors.join('. <br>');

    user = {
      name: name.value,
      surname: surname.value,
      email: login.value,
      password: password1.value,
};

document.addEventListener('submit', function () {
  
    alert('Спасибо, что заполнили форму!')
  });
}


  
//   let response = await fetch(https://httpbin.org/post);

//   if (response.ok) { // если HTTP-статус в диапазоне 200-299
//     // получаем тело ответа (см. про этот метод ниже)
//     let json = await response.json();
//   } else {
//     alert("Ошибка HTTP: " + response.status);
//   }



  //btn = addEventListener('click', checkAll);
// let regName = /[A-Za-zA-Яа-яЁё]/,
// regPass = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;


// function checkValidity (input) {
//     input.preventDefault();
//     if (!regName.test(user.value)) {
//         console.log('error');
//     } else {
//         console.log('ok');
//     }
// }

//  btn = addEventListener('click',checkPassword)}

// function checkPassword(password1,password2) {
//         if (password1.value > 8 && password1.value === password2.value) {
//            return true
//         } else {console.log('error'); };
// }
 