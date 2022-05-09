let button = document.querySelector('#entry')

button.onclick = check

function check() {
    let error = document.querySelector('.error')
    let name = document.querySelector('#name').value
    let surname = document.querySelector('#surname').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let confirmpassword = document.querySelector('#confirmpassword').value
    error.innerHTML= ''
    if (name == "") {
        error.innerHTML+= 'Ваше имя не заполнено<br>'
    }
    if (surname == "") {
        error.innerHTML+= 'Ваша фамилия не заполнена<br>'
    }
    if (email == "") {
        error.innerHTML+= 'Ваш email не заполнен<br>'
    }
    if (password == "") {
        error.innerHTML+= 'Ваш пароль не заполнен<br>'
    }
    if (confirmpassword == "") {
        error.innerHTML+= 'Подтверждение пароля не заполнено<br>'
    }
    
    if (password.length <=5) {
        error.innerHTML+= 'Ваш пароль слишком короткий<br>'
    }
    else 
        error.innerHTML+=`Добро пожаловать, ${name}`
}