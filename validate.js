//elementos del DOM
const form = document.getElementById('form')
const button = document.getElementById('enviar')
const mail = document.getElementById('correo')
const telefono = document.getElementById('telefono')

//Expresion Regular para validar un telefono de 10 digitos
const regExTel = /^\d{10}$/gi

//Expresiones regulares para validar email corporativo excluyendo email comercial
const emailInitial = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@(((\w\s*(?!(hotmail)|(gmail)|(yahoo)).)+\.)+[a-zA-Z]{2,})$/

const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


const validateTelefono = (telefono) =>{
    if(regExTel.test(parseInt(telefono.value))){
        console.log("Telefono Correcto")
    }else{
        console.log("Telefono Incorrecto")
    }
}
const validateEmail = (email) =>{
    if(emailInitial.test(email.value)&&emailRegex.test(email.value)) console.log('email válido')
    else console.log('email incorrecto')
}
validateTelefono(telefono)
validateEmail(mail)
