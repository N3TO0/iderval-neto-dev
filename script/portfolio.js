// Dados dos projetos do portfolio
const projects = [
  {
    id: "project1",

    bannerUrldesktop: "src/img/project-fo-fotografia-mobile.png",
    bannerUrlMobile: "src/img/project-fo-fotografia-mobile.png",

    name: "FO - Fotografia",

    description:
      "Site de portfólio responsivo para fotógrafo, incluindo seções de sobre, serviços, depoimentos de clientes e galeria com funcionalidade de filtragem. Além de direcionamento para redes sociais e contatos.",

    tecnology: [
      "<img src='src/icons/technology_html.png' alt='icone da tecnologia html'/>",
      "<img src='src/icons/technology_css.png' alt='icone da tecnologia css'/>",
      "<img src='src/icons/technology_js.png' alt='icone da tecnologia javascript'/>",
    ],

    github: "https://github.com/N3TO0/fo-portfolio-fotografia",

    linkDeploy: "https://fo-portfolio-fotografia.vercel.app",
  },
];

let containerProjects = select(".container-portfolio");
let countProjects = 0;

function loadProjects() {
  projects.forEach((project) => {
    countProjects += 1;
    containerProjects.innerHTML += `<article class="card-project">
            <header>
              <picture>
                <source
                  media="(min-width: 1000px)"
                  srcset="src/img/project-fo-fotografia-desktop.png" />
                <source
                  media="(min-width: 500px)"
                  srcset="src/img/project-fo-fotografia-tablet.png" />
                <img
                  src="src/img/project-fo-fotografia-mobile.png"
                  alt="imagem do site fo-fotografia."
              /></picture>
            </header>
            <footer>
              <h3>${project.name}</h3>
              <button
                class="button-project button-project-${countProjects}"
                data-type="project${countProjects}"
                title="Saiba mais sobre o projeto ${project.name}"
              >
                Saber mais
                <img
                  src="src/icons/icon-expansion.png"
                  alt="icone de expansão"
                />
              </button>
            </footer>
          </article>`;
  });
}

loadProjects();
