const btn = document.querySelector("#navBtn");
const img = document.querySelector("#navImg");
const block = document.querySelector("#navBlock");
const logo = document.querySelector("#navLogo");
const links = document.querySelector("#navLinks");

btn.addEventListener("click", function () {
  // change img
  if (img.alt == "hamburger") {
    img.src = "./img/nav/close.svg";
    img.alt = "close";
    img.classList = "close";
  } else {
    img.src = "./img/nav/nav-btn.svg";
    img.alt = "hamburger";
  }

  // add absolute position
  block.classList.toggle("mobile__nav");

  // remove logo
  logo.classList.toggle("none");

  // show links
  links.classList.toggle("visibaleNav");
});
