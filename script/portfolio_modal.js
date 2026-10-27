// Elementos html

// Modal do projeto
const modal = select("dialog");
// Botão de fechar do modal
const modalCloseBT = select(".button-close");

// Botões dos projetos
// projeto fo-fotografia
const modalOpenBt = select(".button-project-1");

// Elementos Modal
let imgMoBileModal = select(".img-mobile-modal");
let imgdesktopModal = select(".img-desktop-modal");
let h3Modal = select(".h3Modal");
let pModal = select(".pModal");
let sectionTecnologyModal = select(".content-tecnology-modal");
let btGithubModal = select(".btGithubModal");
let btSite = select(".btSite");

// Função para puxar dados do pejeto
function modalDescription(bt) {
  let dataType = bt.getAttribute("data-type");

  projects.forEach((project) => {
    if (project.id == dataType) {
      h3Modal.textContent = project.name;
      pModal.textContent = project.description;

      imgMoBileModal.setAttribute("srcset", project.bannerUrldesktop);
      imgdesktopModal.setAttribute("src", project.bannerUrlMobile);

      btGithubModal.setAttribute("href", project.github);
      btSite.setAttribute("href", project.linkDeploy);

      sectionTecnologyModal.innerHTML = "";
      project.tecnology.forEach((tecnology) => {
        sectionTecnologyModal.innerHTML += tecnology;
      });
    }
  });
}

// Função para abrir e carregar o modal com dados do projeto clicado
function openModalFunciton(bt) {
  bt.addEventListener("click", () => {
    modal.showModal();
    modalDescription(bt);
  });
}
// Evento para fechar o modal
modalCloseBT.addEventListener("click", () => {
  modal.close();
});

// Evento para abrir o modal
modalOpenBt.addEventListener("click", () => {
  modal.showModal();
  modalDescription(modalOpenBt);
});

// Atruibuição da funcionalidade do modal para abotão
openModalFunciton(modalOpenBt);
