import { productos } from '../utils/productosMock.js'


const contenedorProductos = document.getElementById('cardOfertasIndex');
const contenedorCarrito = document.getElementById('carritoContenedor');
const contadorCarrito = document.getElementById('contador-carrito');
const totalPrecio = document.getElementById('total-precio');

let carritoDeCompras = []

const carritoLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

// Guardar todo en un array de objetos
//carritoLocal("Productos", JSON.stringify(productos));

// // Guardar productos indidualmente
// for ( const producto of productos ) {
//     carritoLocal(producto.producto, JSON.stringify(producto));
// }

const agregarAlCarrito = (productoId) => {
  let repetido = carritoDeCompras.find(productoR => productoR.id == productoId);
  if (repetido) {
    repetido.cantidad++
    document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id=cantidad${repetido.id}>Cantidad:${repetido.cantidad}</p>`
    actualizarCarrito()
  } else {
    let productoAgregar = productos.find(prod => prod.id == productoId);
    console.log(productoAgregar)
    carritoDeCompras.push(productoAgregar);
    productoAgregar.cantidad = 1;
    let div = document.createElement('div');
    div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                                      <div class="row g-0">
                                        <div class="col-md-4">
                                          <img src="${productoAgregar.imagen}" class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8">
                                          <div class="card-body">
                                            <h5 class="card-title">${productoAgregar.titulo}</h5>
                                            <p class="card-text"id=cantidad${productoAgregar.id}>Cantidad:${productoAgregar.cantidad}</p>
                                            <p class="card-text">Precio:${productoAgregar.precio}</p>
                                          </div>
                                        </div>
                                        <button id=eliminar${productoAgregar.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                                      </div>
                                    </div>`
    contenedorCarrito.appendChild(div)
    actualizarCarrito()
    carritoLocal("Productos", JSON.stringify(carritoDeCompras))
    let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
    botonEliminar.addEventListener('click', () => {
      botonEliminar.parentElement.remove()
      carritoDeCompras = carritoDeCompras.filter(el => el.id != productoAgregar.id);
      actualizarCarrito();
    })
  }
}

const mostrarProductos = (productos) => {
  productos.forEach(producto => {
    let div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card h-100">
                          <h5 class="card-title">${producto.titulo}</h5>
                          <img card-img-top src=${producto.imagen}> 
                      </div>
                      <div class="card-text">
                          <p>${producto.descripcion}</p>
                          <p>Talle: ${producto.categoria}</p>
                          <p> ${producto.precio}</p>
                          <button class="btn-floating halfway-fab waves-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></button>
                      </div>`

    contenedorProductos.appendChild(div);

    

    let boton = document.getElementById(`boton${producto.id}`)
    boton.addEventListener('click', () => {
      Toastify({

        text: "Producto agregado",
        
        duration: 3000
        
        }).showToast();
      agregarAlCarrito(producto.id)
    })

  });
}

mostrarProductos(productos);

const actualizarCarrito = () => {
  contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0);
  totalPrecio.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
}

