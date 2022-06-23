const cestaCarrito = document.getElementById('cestaCarrito');
const btnCerrarCarrito = document.getElementById('btnCerrar');
const modalContenedor = document.getElementsByClassName('modal-contenedor')[0];
const modalCarrito = document.getElementsByClassName('modal-carrito')[0];

cestaCarrito.addEventListener('click', () => {
  modalContenedor.classList.toggle('modal-active')
});

btnCerrarCarrito.addEventListener('click', () => {
  modalContenedor.classList.toggle('modal-active')
});

modalCarrito.addEventListener('click', (e) => {
  e.stopPropagation()
});

modalContenedor.addEventListener('click', () => {
  btnCerrarCarrito.click()
});