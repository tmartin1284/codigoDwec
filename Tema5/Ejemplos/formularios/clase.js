// Es una buena práctica que todo el código esté dentro del evento 'DOMContentLoaded' o 'load' 
document.addEventListener('DOMContentLoaded', function () {
  // Capturar todos los elementos 
  const form = document.getElementById('contactForm');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const passwordck = document.getElementById('passwordchek');
  const acceptall = document.getElementById('Check1');

  // Crear el manejador del evento para el envío del formulario ('submit')
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    event.stopPropagation(); // Evita que el evento se propague a elementos padre

    // Llamar a la función principal de validación 
    if (validateForm()) {
      console.log("Todos los campos están bien, podemos proceder");
      form.submit();  // Forzar el envío
    } else {
      console.log("Hay algún campo no válido. El usuario debe revisarlos.")
    }
  });

  // Esta función se encarga de validar todos los campos y 
  // devolver un booleano: true si todos los campos están bien, false en caso contrario
  function validateForm() {
    // Esta bandera se inicializa como true.
    // En caso de encontrar un error en un campo, esta variable se convierte en false.
    var isValid = true;

    // Lógica de validación personalizada
    // Ejemplo de validación personalizada solo comprobando la longitud 
    if (name.value.trim().length < 2) {
      markFieldAsNotValid(name);
      isValid = false;
    } else {
      markFieldAsValid(name);
    }

    // Podemos llamar a funciones personalizadas de validación de campos 
    // también podemos comprobar diferentes condiciones y mostrar diferentes mensajes de error
    if (email.value === "") {
      markFieldAsNotValid(email, "El correo electrónico es obligatorio");
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      markFieldAsNotValid(email, "Por favor, proporciona una dirección de correo válida.");
      isValid = false;
    } else {
      markFieldAsValid(email);
    }

    if (password.value != passwordck.value ) {
            markFieldAsNotValid(passwordck);
      isValid = false;
    } else {
         markFieldAsValid(passwordck);
    }




    if ( !isValidPassword(password.value)) {
      markFieldAsNotValid(password);
      markFieldAsNotValid(passwordck);
      isValid = false;
    } else {
      markFieldAsValid(password);
      markFieldAsValid(passwordck);
    }

    if (acceptall.value) {
      markFieldAsNotValid(acceptall, "debes marcar esta casilla si o si");
      isValid = false;
    } else {
      markFieldAsValid(acceptall)
    }

    // Después de validar todos los campos, devolvemos el valor de la bandera isValid
    return isValid;
  }

  // Definición de las funciones de validación de campos y otras funciones auxiliares
  // ....

});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(passwd) {
  return (passwd.length >= 6);
}

// Esta función marca un campo como no válido y añade el mensaje de error
function markFieldAsNotValid(element, message) {
  // Si tenemos un mensaje personalizado, lo mostramos. En caso contrario, mostramos el mensaje de error presente en el HTML
  if (message) {
    element.parentNode.querySelector(".error-message").textContent = message;
  }
  // Añadiendo la clase que muestra el mensaje de error y añade el borde rojo (css)
  element.parentNode.classList.add("is-not-valid-field");
}

// Esta función marca un campo como válido y oculta el mensaje de error
function markFieldAsValid(element) {
  element.parentNode.classList.remove("is-not-valid-field");
}