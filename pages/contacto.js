// document.addEventListener("click", () => {
//     console.log("Hiciste click!")
// })



// let boton = document.getElementById("btnPrincipal");

// boton.addEventListener("click", respuestaClick)

// function respuestaClick() {
//     console.log("Respuesta a evento")
// }



// let boton = document.getElementById("btnPrincipal");

// boton.onclick = () => {
//     console.log("Respuesta click")
// }


// let element = document.getElementById("t");

// element.addEventListener("click", modifyText);

// function modifyText() {
//     let t2 = document.getElementById("t2");
//     // console.log(t2)
//     t2.innerText = "three";
// }



// EVENTOS DEL MOUSE

// let boton = document.getElementById("btnMain");

// boton.onclick = () => {
//     console.log("Click")
// }

// boton.onmousemove = () => {
//     console.log("Move")
// }


// EVENTOS DE TECLADO

// let input1 = document.getElementById("nombre");
// let input2 = document.getElementById("edad");

// // input1.onkeyup = () => {
// //     console.log("Tecla soltada");
// // }

// input1.onkeydown = () => {
//     console.log("Tecla presionada");
// }




// EVENTO ONCHANGE

// let input1 = document.getElementById("nombre");
// let input2 = document.getElementById("edad");

// input1.onchange = (event) => {
//     // console.log("Valor1")
//     const nombre = event.target.value;
//     console.log(nombre)
// }

// input2.onchange = (e) => {
//     console.log(e.target.value)
// }



// EVENTO INPUT

// let input1 = document.getElementById("nombre");

// input1.addEventListener("input", (e) => {
//     console.log(e.target.value)
// })


// EVENTO SUBMIT

let miFormulario = document.getElementById("formContacto");

 miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

  let nombre = document.getElementById("firstName").value;
  let apellido = document.getElementById("lastName").value;
 
    alert(`Bienvenido ${nombre}`);
}