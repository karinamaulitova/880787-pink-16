var pageHeader = document.querySelector(".page-header");
var menuButton = document.querySelector(".page-header__menu-button");

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (pageHeader.classList.contains("page-header--menu-open")) {
    pageHeader.classList.remove("page-header--menu-open");
  } else {
    pageHeader.classList.add("page-header--menu-open");
  }
})
