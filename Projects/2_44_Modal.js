const openModal = document.querySelector('#open-modal-btn');
const overlayLayer = document.querySelector('#overlay');
const modalLayer = document.querySelector('#modal');
const closeModal = document.querySelector('#close-modal-btn');

openModal.addEventListener('click', () => {
  overlayLayer.classList.add('open');
  modalLayer.classList.add('open');
  console.log('clicked');
});

closeModal.addEventListener('click', () => {
  overlayLayer.classList.remove('open');
  modalLayer.classList.remove('open');
});

overlayLayer.addEventListener('click', () => {
  overlayLayer.classList.remove('open');
  modalLayer.classList.remove('open');
});
