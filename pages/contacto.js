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

import { productos } from '../utils/productosMock.js'

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



/*

    /*le asignamos con setItem una clave y un valor a localstorage
luego le pasamos una clave al metodo getItem de local storage para asignarla en una variable
para posterior mostrarla por consola

localStorage.setItem('nombre', 'alo');
localStorage.setItem('seleccionados', [1,2,3,4]);
sessionStorage.setItem('esValido', false);

let nombre = localStorage.getItem('nombre');
let lista = localStorage.getItem('seleccionados').split(',');
let booleano = (sessionStorage.getItem('esValido') == 'true')

console.log("nombre de local storage: "+nombre);
console.log(lista)
console.log(booleano)
//asi recorremos nuestro localstorage
for(let i=0; i < localStorage.length; i++){
  let clave = localStorage.key(i);
  console.log(i + " clave: "+ clave)
  console.log(i + 'valor: '+ localStorage.getItem(clave))
}
//eliminar informacion localStorage removeItem
localStorage.removeItem('nombre')
//elimina todo el localStorage
localStorage.clear()


/* session storage se utiliza para guardar informacion como la sesion de una usuario solo hasta que se 
cierre la pestaña del navegador y solo guarda en esa pestaña se utiliza igual que localStorage pero cambiando por sessionStorage

//JSON stingify para guardar un objeto en formato json en localstorage
 const producto1 = { id:2, producto: 'arroz'};
 const productosJson = JSON.stringify(producto1);
console.log(productosJson);
localStorage.setItem('elemento1', producto1)
//json.parse para transformar formato json y mostrar en pantalla o consola
const producto2 =JSON.parse(localStorage.getItem('elemento1'))

*/