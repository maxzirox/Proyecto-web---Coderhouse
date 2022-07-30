import { productos } from '../utils/productosMock.js'


const contenedorProductos = document.getElementById('cardOfertasIndex');
const contenedorCarrito = document.getElementById('carritoContenedor');
const contadorCarrito = document.getElementById('contador-carrito');
const totalPrecio = document.getElementById('total-precio');


localStorage.setItem("Productos", JSON.stringify(productos))

let carritoDeCompras = []


const agregarAlCarrito = (productoId) => {
  const carritoLocal = JSON.parse(localStorage.getItem("Carrito"));
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
                            <button id=eliminar${productoAgregar.id} class="btn btn-danger">Eliminar</button>
                            
                        </div>
                      </div>`
    contenedorCarrito.appendChild(div)
    actualizarCarrito()
    let botonPagar = document.getElementById('btnCheck')
    let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
    botonEliminar.addEventListener('click', () => {
      botonEliminar.parentElement.remove()
      carritoDeCompras = carritoDeCompras.filter(el => el.id != productoAgregar.id);
      actualizarCarrito();
    })
    botonPagar.addEventListener('click', () => {
      checkOut(carritoDeCompras);
    })
  }
}

const mostrarProductos = () => {
   fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach(producto => {
    let div = document.createElement('div');
    div.classList.add('ofertas');
    div.innerHTML += `<div class="col">
                        <div class="card h-100">
                          <img src=${producto.imagen} class="card-img-top" alt="gameri7">
                          <div class="card-body">
                            <h5 class="card-title">${producto.titulo}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                          </div>
                          <div class="card-footer">
                            <small class="text-muted">Precio $${producto.precio}</small>
                            <button class="btn btn-dark" id=boton${producto.id}>Agregar</button>
                          </div>
                        </div>
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

  });})
}

mostrarProductos();

const mostrarProductosCheck = (prodCart, contenedor)=>{
  prodCart.forEach(producto => {
  
    contenedor.innerHTML += 
    `
    <li id="cartCheck" class="list-group-item d-flex justify-content-between lh-sm">
      <div>
        <h6 class="my-0">${producto.titulo}</h6>
        <small class="text-muted">${producto.categoria}</small>
      </div>
      <span class="text-muted">${producto.precio}clp</span>
    </li>
    `;
  
  })
}

const actualizarCarrito = () => {
  localStorage.setItem("Carrito", JSON.stringify(carritoDeCompras));
  contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0);
  totalPrecio.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
}

const checkOut = (prodCart) => {
  let main = document.getElementById('mainIndex');

  main.innerHTML = `
  
  <div class="container">
  <main>
    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4" src="/images/logo-kpc3.png" alt="" width="72" height="57">
      <h2>Checkout form</h2>
      <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
    </div>

    <div class="row g-5">
      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Your cart</span>
          <span id="cantidadCheck" class="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul  id="cartCheck" class="list-group mb-3">
          <li  class="list-group-item d-flex justify-content-between lh-sm">
            
          </li>
          
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (CLP)</span>
            <strong id="totalCheck" >$20</strong>
          </li>
        </ul>

      </div>

      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Datos comprador</h4>
        <form id="formCheck" class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">Nombre</label>
              <input type="text" id="nombreCheck" class="form-control" id="firstName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Apellido</label>
              <input type="text" id="apellidoCheck" class="form-control" id="lastName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email <span class="text-muted">(Opcional)</span></label>
              <input type="email" id="mailCheck" class="form-control" id="email" placeholder="you@example.com">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Direccion</label>
              <input type="text" id="dirCheck" class="form-control" id="address" placeholder="Tadeo haneke 2230" required>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-12">
              <label for="address2" class="form-label">Direccion 2 <span class="text-muted">(Opcional)</span></label>
              <input type="text" id="direCheck" class="form-control" id="address2" placeholder="dpto o torre">
            </div>


          <h4 class="mb-3">Payment</h4>

          <div class="my-3">
            <div class="form-check">
              <input id="credit" id="nombreCheck" name="paymentMethod" type="radio" class="form-check-input" checked required>
              <label class="form-check-label" for="credit">Credit card</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required>
              <label class="form-check-label" for="debit">Debit card</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required>
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Nombre de titular</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required>
              <small class="text-muted">Nombre completo de tarjeta</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Numero de tarjeta</label>
              <input type="text" id="ccCheck" class="form-control" id="cc-number" placeholder="" required>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiracion</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr class="my-4">

          <button id="btnCheck" class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </form>
      </div>
    </div>
  </main>

  </div> `;

  let cartCheck = document.getElementById('cartCheck');
  let cantidadCheck = document.getElementById('cantidadCheck');
  let totalCheck = document.getElementById('totalCheck');
  let cantidad = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0);
  let total = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);

  let miFormulario = document.getElementById("formCheck");

  cantidadCheck.innerText = `${cantidad}`;
  totalCheck.innerText = `${total} clp`;
  mostrarProductosCheck(prodCart, cartCheck)



miFormulario.addEventListener('submit', () => {

  let totalCheck = document.getElementById('totalCheck');
  let nombre = document.getElementById('nombreCheck').value
  let apellido = document.getElementById('apellidoCheck').value
  let mail = document.getElementById('mailCheck').value
  let direccion = document.getElementById('dirCheck').value
  let cc = document.getElementById('ccCheck').value
  let ccParcial = cc.substring(0, 8) + "XXXX"
  let total = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);
  let date = new Date();
  totalCheck.innerText = `$${total} clp`;
  main.innerHTML = `
                      
                          <div id="contBoletas" class="col-md-5 col-lg-4 order-md-last">
                            <h2 class="d-flex justify-content-between align-items-center mb-3">
                              <span class="text-primary">
                                  Boleta electronica<br/>
                              Kpc'Store <br/>Iquique <br/> </p>
                              </span>
                            </h2>                           
                            <div class="d-flex justify-content-center">
                              <p>fecha: ${date}</p>
                              <p>Felicidades ${nombre} ${apellido}, has realizado un pago exitoso.</p>
                              <p>Hemos enviado el comprobante a tu correo: ${mail}</p>
                            </div>
                            <ul  id="cartCheck" class="list-group mb-3">
                              <li  class="list-group-item d-flex justify-content-between lh-sm">
                                
                              </li>
                              
                              <li class="list-group-item d-flex justify-content-between">
                                <span>Total (CLP)</span>
                                <strong id="totalCheck" >$${total}</strong>
                              </li>
                            </ul>
                            <div class="d-flex justify-content-center">
                              <p>Numer de Tarjeta: ${ccParcial}</p>
                              <p>Direccion de envio: ${direccion}</p>
                            </div>
                          </div>

                      </div>  
                    
                   `;
  
  let cartCheck = document.getElementById('cartCheck');
  mostrarProductosCheck(prodCart, cartCheck)
  
})

}


