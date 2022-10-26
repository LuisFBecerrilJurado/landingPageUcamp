const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");
const inicio = document.getElementById("inicio");
const list = document.getElementById("menulist");
const clientes = document.getElementById("clientes");
const contacto = document.getElementById("contacto");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
  inicio.classList.toggle("ocultar");
});

navWrapper.addEventListener("click", (e) => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
    inicio.classList.remove("show");
  }
});
