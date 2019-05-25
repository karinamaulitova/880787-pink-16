var warningPopup = document.querySelector(".pop-up--warning");
var submitPopup = document.querySelector(".pop-up--submit");
var popupOpenButton = document.querySelector(".contest-form__button");
var nameInput = document.querySelector(".fieldset-name__text-input");
var contactsInput = document.querySelector(".fieldset-contacts__text-input");
var popupWarningCloseButton = document.querySelector(".pop-up--warning .pop-up__button");
var popupSubmitCloseButton = document.querySelector(".pop-up--submit .pop-up__button");

  popupOpenButton.addEventListener("click", function (evt) {
  if (!nameInput.value || !contactsInput.value) {
    evt.preventDefault();
    warningPopup.classList.add("pop-up--error");
  } else {
    evt.preventDefault();
    submitPopup.classList.add("pop-up--show");
  }
});

function closePopups(evt) {
  evt.preventDefault();
  warningPopup.classList.remove("pop-up--error");
  submitPopup.classList.remove("pop-up--show");
}

popupSubmitCloseButton.addEventListener("click", closePopups);
popupWarningCloseButton.addEventListener("click", closePopups);
