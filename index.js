import { productos } from '../utils/productosMock.js'



const mostrarProductos = (productos) => {
    let container = document.getElementById("cardOfertasIndex");
    productos.map((item) => {
      return(
        container.innerHTML = `<div class="card h-100">
        <img src="${item.imagen}" id="cardOfertas" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.titulo}</h5>
          <p class="card-text">${item.categoria}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Precio $ ${item.precio}</small>
        </div>
      </div>`
      )
    })
}

mostrarProductos(productos);