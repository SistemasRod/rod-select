//elementos del DOM
const form = document.getElementById("form");
const iconoInput = document.getElementById("iconoInput");
const button = document.getElementById("enviar");
const mail = document.getElementById("correo");
const telefonoC = document.getElementById("telefono");
const nombreC = document.getElementById("nombre");

//Expresion Regular Nombre
const regExName = /^[a-z ,.'-]+$/;
//Expresion Regular para validar un telefono de 10 digitos
const regExTel = /^\d{10}$/gi;

//Expresiones regulares para validar email corporativo excluyendo email comercial
const emailInitial =
  /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@(((\w\s*(?!(hotmail)|(gmail)|(yahoo)).)+\.)+[a-zA-Z]{2,})$/;

const emailRegex =
  /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateName = (name) => {
  if (regExName.test(name)) {
    console.log("Nombre Correcto",nombreC.nextElementSibling);
    
    nombreC.parentElement.classList.remove('form-input-incorrecto');
    nombreC.parentElement.classList.add('form-input-correcto');
    nombreC.nextElementSibling.classList.remove('fa-times-circle');
    nombreC.nextElementSibling.classList.add('fa-check-circle');
    
  } else {
    console.log("Nombre Incorrecto");
    nombreC.parentElement.classList.add('form-input-incorrecto');
    nombreC.nextElementSibling.classList.add('fa-times-circle');
  }
};
const validateTelefono = (telefono) => {
  if (regExTel.test(parseInt(telefono))) {
    console.log("Telefono Correcto",telefonoC.nextElementSibling);
    telefonoC.parentElement.classList.remove('form-input-incorrecto');
    telefonoC.parentElement.classList.add('form-input-correcto');
    telefonoC.nextElementSibling.classList.remove('fa-times-circle');
    telefonoC.nextElementSibling.classList.add('fa-check-circle');
  } else {
    console.log("Telefono Incorrecto");
    telefonoC.parentElement.classList.add('form-input-incorrecto');
    telefonoC.nextElementSibling.classList.add('fa-times-circle');
  }
};
const validateEmail = (email) => {
  console.log(email);
  if (emailInitial.test(email) && emailRegex.test(email))
    {
      console.log("email válido");
      mail.parentElement.classList.remove('form-input-incorrecto');
      mail.parentElement.classList.add('form-input-correcto');
      mail.nextElementSibling.classList.remove('fa-times-circle');
      mail.nextElementSibling.classList.add('fa-check-circle');
  }else{
    console.log("email incorrecto");
    mail.parentElement.classList.add('form-input-incorrecto');
    mail.nextElementSibling.classList.add('fa-times-circle');

  } 
};

mail.addEventListener("keyup", (e) => {
  validateEmail(e.target.value.trim());
});

telefono.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  validateTelefono(parseInt(e.target.value));
});
nombreC.addEventListener("keyup", (e) => {
  validateName(e.target.value.trim());
});
