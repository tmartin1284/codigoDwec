window.addEventListener("load", function () {
    //Capturamos los elementos del formulario
    const formulario = document.querySelector("#formulario");
    const usuario = document.querySelector("#user");
    const passwd = document.querySelector("#passwd");
    const newPasswd = document.querySelector("#newpasswd");
    const fechaNac = document.querySelector("#fechaNac");
    const condiciones = document.querySelector("#condiciones");



    ///////////////////////////////////////////////////////////////
    // a partir de aquí pondremos funciones de validación
    ///////////////////////////////////////////////////////////////

    //validaUser(el) valida que el user es correcto. devolverá true si correcto y false si no
    //la función recibe el elemento input usuario, no su valor!!!!!
    function validaUser(el) {
        if (!el.value) {
            alert("Usuario debe contener algo");
            return false;
        } else {
            return true;
        }
    }


    //validaPass(el) 




    //validaPass2




    //validaCheck




    ///////////////////////////////////////////////////////////////
    // funciones de utilidad:
    ///////////////////////////////////////////////////////////////

    //pone un mensaje pasado al parrafo de error asociado al elemento pasado 
    //y pone la clase de error al padre



    //quita el mensaje de error al elemento pasado y quita la clase de error al padre 






});