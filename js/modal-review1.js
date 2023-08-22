document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  const phoneNumberInput = document.getElementById("phone");

  // Inițializați intlTelInput
  const iti = window.intlTelInput(phoneNumberInput, {
    separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js",
  });

  // Setați stilul pentru padding-left direct pe elementul de input
  phoneNumberInput.style.paddingLeft = "177px";

  // Asigurați-vă că valoarea de număr de telefon este corectă atunci când se modifică prefixul
  phoneNumberInput.addEventListener("change", () => {
    phoneNumberInput.value = iti.getNumber();
  });
});