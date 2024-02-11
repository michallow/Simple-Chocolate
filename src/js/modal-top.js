(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-top-open]'),
    closeModalBtn: document.querySelector('[data-modal-top-close]'),
    modal: document.querySelector('[data-top-modal]'),
    buyNowBtn: document.querySelector('.button-buy-now'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.buyNowBtn.classList.toggle('hidden');
  }
})();
