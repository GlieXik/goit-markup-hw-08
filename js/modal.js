const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
const backdrop = (event) => {
  console.log(event.currentTarget, "--", event.target);
  if (event.currentTarget === event.target) {
    console.log("fsf");
    toggleModal();
  }
};
refs.modal.addEventListener("click", backdrop);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
}
