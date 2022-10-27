const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");
const inicio = document.getElementById("inicio");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
  inicio.style.visibility = hidden;
});

navWrapper.addEventListener("click", (e) => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
    inicio.style.visibility = visible;
  }
});
