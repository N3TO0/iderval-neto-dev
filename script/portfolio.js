// Dados dos projetos do portfolio
// Projetos = {
//   p1: {
//     id: "project1",

//     bannerUrldesktop: "src/img/project-fo-fotografia-mobile.png",
//     bannerUrlMobile: "src/img/project-fo-fotografia-mobile.png",

//     name: "FO - Fotografia",

//     description:
//       "Site de portfólio responsivo para fotógrafo, incluindo seções de sobre, serviços, depoimentos de clientes e galeria com funcionalidade de filtragem. Além de direcionamento para redes sociais e contatos.",

//     tecnology: [
//       "<img src='src/icons/technology_html.png' alt='icone da tecnologia html'/>",
//       "<img src='src/icons/technology_css.png' alt='icone da tecnologia css'/>",
//       "<img src='src/icons/technology_js.png' alt='icone da tecnologia javascript'/>",
//     ],

//     github: "https://github.com/N3TO0/fo-portfolio-fotografia",

//     linkDeploy: "fo-portfolio-fotografia.vercel.app",
//   },
// };

// Elementos html
// Modal do projeto
const modal = select("dialog");

// Botão de fechar do modal
const modalCloseBT = select(".button-close");

// Botão do projeto fo-fotografia
const modalOpenBt = select(".button-project-1");

// Função para puxar dados do pejeto
// function modalDescription() {
//   modal.showModal();
// }

// Evento para fechar o modal
modalCloseBT.addEventListener("click", () => {
  modal.close();
});

// Evento para abrir o modal
// modalOpenBt.addEventListener("click", modalDescription());

modalOpenBt.addEventListener("click", () => {
  modal.showModal();
});
