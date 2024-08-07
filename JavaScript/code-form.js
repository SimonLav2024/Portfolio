function validarNombre(){
    let nombreTxt = document.getElementById("nombre").value;
    let nombreErrorTxt = document.getElementById("nombreError");
    if(nombreTxt.trim().length < 3){
        nombreErrorTxt.textContent = "El nombre debe tener al menos tres caracteres.";
        document.getElementById("nombre").classList.add("error-input");
        document.getElementById("nombre").classList.remove("succes");
        return false;
    }else{
        nombreErrorTxt.textContent = "";
        document.getElementById("nombre").classList.add("succes");
        document.getElementById("nombre").classList.remove("error-input");
        return true;
    }
}

function validarEmail(){
    let emailTxt = document.getElementById("email").value;
    let emailErrorTxt = document.getElementById("emailError");
    let emailRegex = new RegExp("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}");

    if(emailRegex.test(emailTxt.trim())){
        emailErrorTxt.textContent = "";
        document.getElementById("email").classList.remove("error-input");
        document.getElementById("email").classList.add("succes");
        return true;
    }else{
        emailErrorTxt.textContent = "Por favor, introduce un E-mail válido";
        document.getElementById("email").classList.add("error-input");
        document.getElementById("email").classList.remove("succes");
        return false;
    }
}






 //con esto se agregan eventos de escucha para la validacion en tiempo real
 document.getElementById("nombre").addEventListener("input", validarNombre);
 document.getElementById("email").addEventListener("input", validarEmail);
 document.getElementById("password").addEventListener("input", validarPassword);
 document.getElementById("confirmarPassword").addEventListener("input", confirmarPassword);
 //fin
 
 
 //capturar evento submit
 document.getElementById("registroForm").addEventListener("submit", function(event){
     //event.preventDefault(); //deteiene el compotamiento del submit
     console.log("has pulsado el boton de enviar");
 
     let isNombreValid = validarNombre();
     let isEmailValid = validarEmail();
     let isPasswordValid = validarPassword();
     let isConfirmarPasswordValid = confirmarPassword();
     
     if(isNombreValid && isEmailValid && isPasswordValid && isConfirmarPasswordValid){
         alert("Formulario enviado con éxito");
         this.reset();
     }else{
         alert("Por favor, corrija los errores del formulario");
     }
 });