


let miFormulario = document.getElementById("formContacto");
let container = document.getElementById("container");


 miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
  localStorage.setItem('nombre', document.getElementById("username").value);
  localStorage.setItem('email', document.getElementById("email").value);
  let usuario =  localStorage.getItem('nombre');
  let email =  localStorage.getItem('email');
 
  container.innerHTML = "Gracias "+usuario+", por escribir tu opinion o sugerencia. Te enviaremos un correo a "+email+" con nuestra respuesta.";
   
}



