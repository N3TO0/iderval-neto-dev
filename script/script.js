// Botão menu para mobile
const menuBt = document.querySelector(".menuBt");

// Header
const menu = document.querySelector("#menu");

// Ativação do menu mobile
let menuDisabled = true;

// Evento para ativação do menu mobile
menuBt.addEventListener("click", () => {
  if (menuDisabled) {
    menu.classList.remove("header-primary");
    menu.classList.add("header-primary-select");
    menuDisabled = false;
    console.log(menuDisabled);

  } else {
    menu.classList.remove("header-primary-select");
    menu.classList.add("header-primary");
    menuDisabled = true;
    console.log(menuDisabled);

  }
});

