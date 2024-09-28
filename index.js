const suscribeButton = document.querySelector(".suscribe__button");
const suscribePopUp = document.getElementById("popUp-Suscribe");
const closeButton = document.querySelector(".pop-up__close-button");
const suscribeForm = document.querySelector(".pop-up__form");
const sentPopUp = document.getElementById("popUp-sent");

suscribeButton.addEventListener("click", (e) => {
  suscribePopUp.classList.add("pop-up_opened");
});

closeButton.addEventListener("click", (e) => {
  suscribePopUp.classList.remove("pop-up_opened");
});

suscribeForm.addEventListener("submit", (e) => {
  // Evitamos que el formulario recargue la página
  e.preventDefault();

  suscribePopUp.classList.remove("pop-up_opened");
  sentPopUp.classList.add("pop-up__sent_opened");

  setTimeout(() => {
    sentPopUp.classList.remove("pop-up__sent_opened");
  }, 1000); // Cerrar el popUp después de 1segs.
});
