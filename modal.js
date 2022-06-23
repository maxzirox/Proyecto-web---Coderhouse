const cestaCarrito = document.getElementById('cestaCarrito');
const btnCerrarCarrito = document.getElementById('btnCerrar');
const modalContenedor = document.getElementsByClassName('modal fade')[0];
const modalCarrito = document.getElementsByClassName('modal-body')[0];

/*cestaCarrito.addEventListener('click', () => {
  modalContenedor.classList.toggle('modal-active')
});

btnCerrarCarrito.addEventListener('click', () => {
  modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
  btnCerrarCarrito.click()
});
*/

modalCarrito.addEventListener('click', (e) => {
  e.stopPropagation()
});

