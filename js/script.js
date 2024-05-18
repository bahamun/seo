// script.js

document.addEventListener("DOMContentLoaded", function () {
  const contactLink = document.querySelector("#contactenos a");
  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    alert("¡Gracias por contactarnos!");
  });
});
