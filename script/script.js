// Funcão para selecionar elemento html
function select(tag) {
  return document.querySelector(tag);
}

// Botão menu para mobile
const menuBt = select(".menuBt");

// Header
const menu = select("#menu");

// Ativação do menu mobile
let menuIsOpen = false;

// Função para tivação ou desativação do menu mobile
function menuSelected() {
  if (menuIsOpen) {
    menu.classList.remove("header-primary-select");
    menu.classList.add("header-primary");
    menuIsOpen = false;
  } else {
    menu.classList.remove("header-primary");
    menu.classList.add("header-primary-select");
    menuIsOpen = true;
  }
}

// Evendo de clique no menu hamburguer
menuBt.addEventListener("click", menuSelected);

// Botões nav
const navButtons = document.querySelectorAll(".navBt");

// Evento para desativar o menu selecionado se os botões do nav forem clicados
navButtons.forEach((bt) => {
  bt.addEventListener("click", () => {
    if (menuIsOpen) {
      menuSelected();
    }
  });
});
