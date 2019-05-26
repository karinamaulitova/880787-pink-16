var pageHeader = document.querySelector(".page-header");
var menuButton = document.querySelector(".page-header__menu-button");
var promoSection = document.querySelector(".promo");

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (pageHeader.classList.contains("page-header--menu-open")) {
    promoSection.classList.add("promo--padding-top");
    pageHeader.classList.remove("page-header--menu-open");
  } else {
    promoSection.classList.remove("promo--padding-top");
    pageHeader.classList.add("page-header--menu-open");
  }
});
