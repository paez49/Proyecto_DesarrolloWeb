function validarFormulario() {
    var nombre = document.forms["miFormulario"]["nombre"];
    var email = document.forms["miFormulario"]["email"];
    var num = document.forms["miFormulario"]["numero"];
    var com = document.forms["miFormulario"]["comentario"]
    if (nombre.value == "" || email.value == "" || num.value == "") {
        
      if (nombre.value == "") {
        nombre.classList.add("error");
      } else {
        nombre.classList.remove("error");
      }
      if (email.value == "") {
        email.classList.add("error");
      } else {
        email.classList.remove("error");
      }
      if (num.value == "") {
        num.classList.add("error");
      } else {
        num.classList.remove("error");

      }
      return false;
    }
}