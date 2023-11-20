const openModal = document.querySelector('#open-modal-btn');
const overlayLayer = document.querySelector('#overlay');
const modalLayer = document.querySelector('#modal');
console.log(openModal);
openModal.addEventListener('click', () => {
  overlayLayer.classList.add('open');
  modalLayer.classList.add('open');
  console.log('clicked');
});
