import { productos } from '../utils/productosMock.js'

const contenedorProductos = document.getElementById('cardOfertasIndex');
const contenedorCarrito = document.getElementById('carritoContenedor');
const contadorCarrito = document.getElementById('contador-carrito');
const totalPrecio = document.getElementById('total-precio');

let carritoDeCompras = []

const productosJson = JSON.stringify(productos);

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
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${productoAgregar.titulo}</p>
                    <p>Precio:${productoAgregar.precio}</p>
                    <p id=cantidad${productoAgregar.id}>Cantidad:${productoAgregar.cantidad}</p>
                    <button id=eliminar${productoAgregar.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`

    contenedorCarrito.appendChild(div)
    actualizarCarrito()
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
                          <a class="btn-floating halfway-fab waves-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                      </div>`

    contenedorProductos.appendChild(div);

    let boton = document.getElementById(`boton${producto.id}`)
    boton.addEventListener('click', () => {
      agregarAlCarrito(producto.id)
    })

  });
}

mostrarProductos(productos);

const actualizarCarrito = () => {
  contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0);
  totalPrecio.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
}