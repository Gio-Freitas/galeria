// =========================================
// CONFIGURAÇÃO CENTRALIZADA
// =========================================
const fotosComRotacaoHorizontal = ["foto_23.jpg", "foto_26.jpg", "foto_10.jpg"];

// =========================================
// DADOS DE MEMBROS E DESTAQUES (Para os novos blocos)
// =========================================

const membrosPorEquipe = {
  "19_20": [
    { nome: "Fábio Ricardo de Oliveira", funcao: "Gestor Financeiro" },
    { nome: "Kayke Rodrigues Camargo", funcao: "Engenheiro de Manufatura" },
    { nome: "Gustavo Martins Teixeira", funcao: "Engenheiro de Design" },
    {
      nome: "Mariana Silva Brandão",
      funcao: "Gerente de Equipe / Designer Gráfica",
    },
    { nome: "Maria Eduarda Sany da Silva", funcao: "Gerente de Projeto" },
    {
      nome: "Anniele Lotti Souto",
      funcao: "Gerente de Marketing e Comunicações",
    },
  ],
  "20_21": [
    { nome: "Guilherme Lima Albuquerque", funcao: "Gerente de Projeto Social" },
    {
      nome: "Mariana Silva Brandão",
      funcao: "Gerente de Equipe / Design Gráfico",
    },
    { nome: "Guilherme Leonardo Gomes da Silva", funcao: "Gestor Financeiro" },
    { nome: "Gabriel Guimarães Mendes", funcao: "Engenheiro de Manufatura" },
    { nome: "Clarice Zimmer", funcao: "Gerente de Marketing" },
    { nome: "Gustavo Martins Teixeira", funcao: "Engenheiro de Design" },
  ],
  "21_22": [
    { nome: "Clarice Zimmer", funcao: "Gerente de Marketing" },
    { nome: "Gustavo Martins Teixeira", funcao: "Engenheiro de Design" },
    { nome: "Guilherme Lima Albuquerque", funcao: "Engenheiro de Manufatura" },
    {
      nome: "Mariana Silva Brandão",
      funcao: "Gerente de Equipe / Design Gráfico",
    },
    { nome: "Guilherme Leonardo Gomes da Silva", funcao: "Gestor Financeiro" },
    { nome: "Elis Sena Galvão", funcao: "Gerente de Projeto Social" },
  ],
  "22_23": [
    { nome: "Gustavo Martins Teixeira", funcao: "Engenheiro de Design" },
    { nome: "Guilherme Lima Albuquerque", funcao: "Engenheiro de Manufatura" },
    { nome: "Guilherme Leonardo Gomes da Silva", funcao: "Gerente de Equipe" },
    { nome: "Giovanna Castro Freitas", funcao: "Designer Gráfico" },
    { nome: "Miguel Melo", funcao: "Gestor de Recursos" },
    { nome: "Kamille Ceciliano", funcao: "Gerente de Marketing" },
  ],
  "23_24": [
    { nome: "Guilherme Lima Albuquerque", funcao: "Engenheiro de Design" },
    { nome: "Miguel Melo", funcao: "Gerente de Equipe" },
    { nome: "Evelyn Oliveira", funcao: "Engenheiro de Manufatura" },
    { nome: "Geovana Carvalho", funcao: "Designer Gráfico" },
    { nome: "Isabely Ruppel", funcao: "Gestor de Recursos" },
  ],
  "24_25": [
    { nome: "Evelyn Oliveira", funcao: "Gerente de Projetos" },
    { nome: "Isabely Ruppel", funcao: "Engenheira de Design" },
    { nome: "Maryana Dias", funcao: "Designer Gráfico" },
    { nome: "Marcus Gabriel", funcao: "Engenheiro de Manufatura" },
    { nome: "Nicoly Stephany", funcao: "Gerente de Marketing" },
    { nome: "Geovana Carvalho", funcao: "Gerente de Equipe" },
  ],
  "25_26": [
    { nome: "Maryana Dias", funcao: "Gerente de equipe" },
    { nome: "Marcus Gabriel", funcao: "Engenheiro de Design" },
    { nome: "Sofia Berté", funcao: "Gerente de Marketing" },
    { nome: "Tasso Silva", funcao: "Gerente de Recursos" },
    { nome: "Enzo Melo", funcao: "Designer Gráfico" },
    { nome: "Matheus Padovani", funcao: "Engenheiro de Manufatura" },
  ],
};

const destaquesPorEquipe = {
  "19_20": ["10° Colocação Geral no Nacional"],
  "20_21": ["Prêmio Pensamento Criativo - Nacional"],
  "21_22": ["4° Colocação Geral - Nacional"],
  "22_23": [
    "1° Lugar Geral - Campeões Nacionais",
    "Prêmio Melhor Patrocínio e Marketing",
    "Prêmio Melhor Estande",
    "Participação nas World Finals",
    "3° Lugar no Nose Cone Challenge - Mundial",
    "Lançamento da Marca de roupa (Mach-One Wear)",
    "Lançamento do MachCast",
    "Lançamento do Jogo At Mach One",
  ],
  "23_24": [
    "Prêmio Melhor Estande",
    "Nova Marca de roupas - Coleção Explosion",
    "Continuação do MachCast",
  ],
  "24_25": [
    "Prêmio Melhor Apresentação Verbal",
    "Lançamento do Site Oficial",
    "Criação do quadro Pit Stop de Perguntas",
    "Lançamento do drop da coleção: In the Xtreme",
  ],
  "25_26": ["Equipe Atual", "Em Busca do Bicampeonato Nacional"],
};

/**
 * Verifica se a imagem atual deve ser rotacionada no Lightbox
 * e aplica ou remove a classe 'rot-horizontal'.
 */
function checkRotationInLightbox(imgElement) {
  const src = imgElement.src;
  const nomeArquivo = src.substring(src.lastIndexOf("/") + 1);

  imgElement.classList.remove("rot-horizontal");

  if (fotosComRotacaoHorizontal.includes(nomeArquivo)) {
    imgElement.classList.add("rot-horizontal");
  }
}

// =========================================
// LÓGICA DE CARREGAMENTO DE DADOS (galeria.html)
// =========================================

function carregarDadosDetalhes(equipe) {
  // 1. Carregar Membros
  const membrosContainer = document.getElementById("lista-membros");
  if (membrosContainer) {
    membrosContainer.innerHTML = "";
    const membros = membrosPorEquipe[equipe] || [];

    membros.forEach((membro) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <span class="membro-nome">${membro.nome}</span>
                <span class="membro-funcao">${membro.funcao}</span>
            `;
      membrosContainer.appendChild(li);
    });
  }

  // 2. Carregar Destaques
  const destaquesContainer = document.getElementById("lista-destaques");
  if (destaquesContainer) {
    destaquesContainer.innerHTML = "";
    const destaques = destaquesPorEquipe[equipe] || [];

    destaques.forEach((destaque) => {
      const li = document.createElement("li");
      li.textContent = destaque;
      destaquesContainer.appendChild(li);
    });
  }
}

function carregarEquipe() {
  const params = new URLSearchParams(window.location.search);
  const equipe = params.get("equipe");

  if (!equipe) return;

  const titulo = document.getElementById("titulo-equipe");
  const descricao = document.getElementById("descricao-equipe");
  const fotosContainer = document.getElementById("fotos-equipe");

  const temas = {
    "19_20":
      "'First comes the passion, and then comes the commitment to becoming the best.' - Lewis Hamilton",
    "20_21":
      "'The secret to winning is the patience to wait for the right moment to strike.' - Niki Lauda",
    "21_22":
      "'What matters is not a single outstanding move but your performance across the full duration of a race, a racing season...' - Ayrton Senna",
    "22_23":
      "'I am not designed to come second or third, I am designed to win.' - Ayrton Senna",
    "23_24":
      "'With regard to performance, commitment, effort, dedication, there is no middle ground. Or you do something very well or not at all.' - Ayrton Senna",
    "24_25":
      "'Você precisa ter dedicação total, buscar seu limite e dar o melhor de si.' - Ayrton Senna",
    "25_26":
      "'We have to remember these days. Because there's no guarantee that they'll last forever! Enjoy them as long as they last.' - Sebastian Vettel",
  };

  titulo.textContent = `Equipe ${equipe.replace("_", "/")}`;
  descricao.textContent = temas[equipe] || "Equipe Mach-One.";

  carregarDadosDetalhes(equipe);

  fotosContainer.innerHTML = "";

  const imagensPorEquipe = {
    "19_20": [
      "foto_51.jpg",
      "foto_52.jpg",
      "foto_53.jpg",
      "foto_54.jpg",
      "foto_55.jpg",
      "foto_56.jpg",
      "foto_57.jpg",
      "foto_58.jpg",
      "foto_59.jpg",
      "foto_60.jpg",
      "foto_61.jpg",
      "foto_62.jpg",
      "foto_63.jpg",
      "foto_64.jpg",
      "foto_65.jpg",
      "foto_66.jpg",
      "foto_67.jpg",
    ],
    "20_21": [
      "foto_68.png",
      "foto_70.jpg",
      "foto_71.jpg",
      "foto_72.jpg",
      "foto_73.jpg",
      "foto_74.jpg",
      "foto_75.jpg",
      "foto_76.jpg",
      "foto_77.jpg",
      "foto_78.jpg",
      "foto_79.jpg",
      "foto_80.jpg",
      "foto_81.jpg",
      "foto_82.jpg",
      "foto_83.jpg",
      "foto_84.jpg",
    ],
    "21_22": [
      "foto_69.png",
      "foto_85.jpg",
      "foto_86.jpg",
      "foto_87.jpg",
      "foto_88.jpg",
    ],
    "22_23": [
      "foto_7.jpg",
      "foto_21.jpg",
      "foto_22.jpg",
      "foto_23.jpg",
      "foto_24.jpg",
      "foto_25.jpg",
      "foto_26.jpg",
      "foto_27.jpg",
      "foto_28.jpg",
      "foto_29.jpg",
      "foto_30.jpg",
      "foto_31.jpg",
      "foto_32.jpg",
      "foto_33.jpg",
      "foto_34.jpg",
      "foto_35.jpg",
      "foto_37.jpg",
      "foto_39.jpg",
      "foto_41.jpg",
      "foto_42.jpg",
      "foto_43.jpg",
      "foto_44.jpg",
      "foto_45.jpg",
      "foto_46.jpg",
      "foto_47.jpg",
      "foto_48.jpg",
      "foto_49.jpg",
      "foto_50.jpg",
      "foto_89.jpg",
      "foto_90.jpg",
      "foto_91.jpg",
      "foto_92.jpg",
      "foto_93.jpg",
      "foto_94.jpg",
      "foto_95.jpg",
      "foto_96.jpg",
    ],
    "24_25": [
      "foto_2.jpg",
      "foto_3.jpg",
      "foto_4.jpg",
      "foto_5.jpg",
      "foto_6.jpg",
      "foto_8.jpg",
      "foto_14.jpg",
      "foto_15.jpg",
      "foto_16.jpg",
    ],
    "25_26": [
      "foto_9.jpg",
      "foto_10.jpg",
      "foto_12.jpg",
      "foto_13.jpg",
      "foto_17.jpg",
      "foto_18.jpg",
      "foto_19.jpg",
      "foto_20.jpg",
    ],
  };

  const imagens = imagensPorEquipe[equipe] || [];
  if (imagens.length === 0) {
    fotosContainer.textContent = "Nenhuma foto disponível para esta equipe.";
    return;
  }

  imagens.forEach((img, index) => {
    const elemento = document.createElement("img");
    elemento.src = `img/${equipe}/${img}`;
    elemento.alt = `Equipe ${equipe.replace("_", "/")} - Foto ${index + 1}`;
    elemento.classList.add("foto-galeria");
    fotosContainer.appendChild(elemento);
  });

  inicializarLightbox(document.querySelectorAll("#fotos-equipe .foto-galeria"));
}

// =========================================
// LÓGICA LIGHTBOX (REUTILIZÁVEL)
// =========================================

function inicializarLightbox(fotos) {
  if (fotos.length === 0) return;

  const lightbox = document.getElementById("lightbox");
  const imgExpandida = document.getElementById("img-expandida");
  const fechar = document.getElementById("fechar");
  const btnAnterior = document.getElementById("anterior");
  const btnProximo = document.getElementById("proximo");

  let indiceAtual = 0;

  function mostrarLightbox(index) {
    indiceAtual = index;
    imgExpandida.src = fotos[indiceAtual].src;
    checkRotationInLightbox(imgExpandida);
    lightbox.style.display = "flex";
  }

  fotos.forEach((foto, index) => {
    foto.onclick = () => mostrarLightbox(index);
  });

  fechar.onclick = () => {
    lightbox.style.display = "none";
    imgExpandida.classList.remove("rot-horizontal");
  };

  lightbox.onclick = (e) => {
    if (e.target === lightbox) {
      fechar.onclick();
    }
  };

  btnAnterior.onclick = (e) => {
    e.stopPropagation();
    indiceAtual = (indiceAtual - 1 + fotos.length) % fotos.length;
    mostrarLightbox(indiceAtual);
  };

  btnProximo.onclick = (e) => {
    e.stopPropagation();
    indiceAtual = (indiceAtual + 1) % fotos.length;
    mostrarLightbox(indiceAtual);
  };

  document.onkeydown = (e) => {
    if (lightbox.style.display === "flex") {
      if (e.key === "ArrowLeft") {
        btnAnterior.onclick(e);
      } else if (e.key === "ArrowRight") {
        btnProximo.onclick(e);
      } else if (e.key === "Escape") {
        fechar.onclick();
      }
    }
  };
}

function inicializarGaleriaPrincipal() {
  const fotosJuntos = document.querySelectorAll(
    "#galeria-juntos .foto-galeria"
  );
  inicializarLightbox(fotosJuntos);
}

// =========================================
// LÓGICA DO SLIDER DE COLEÇÕES WEAR
// =========================================

function inicializarSlidersWear() {
  const wearItems = document.querySelectorAll(".wear-item");

  wearItems.forEach((item) => {
    const slides = item.querySelectorAll(".foto-wear");
    const arrows = item.querySelectorAll(".slider-arrow");
    let currentSlideIndex = 0; // Começa na primeira foto

    // Garante que apenas o primeiro slide esteja ativo no início
    slides.forEach((slide, index) => {
      slide.classList.remove("active-slide");
      if (index === 0) {
        slide.classList.add("active-slide");
      }
    });

    function showSlide(index) {
      // Remove a classe 'active-slide' de todos
      slides.forEach((slide) => slide.classList.remove("active-slide"));
      // Garante que o índice esteja dentro do limite (0 ou 1)
      currentSlideIndex = (index + slides.length) % slides.length;
      // Adiciona a classe 'active-slide' apenas ao slide correto
      slides[currentSlideIndex].classList.add("active-slide");
    }

    arrows.forEach((arrow) => {
      arrow.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation(); // Impede o evento de subir para o <a>

        const direction = parseInt(arrow.dataset.dir);
        showSlide(currentSlideIndex + direction);
      });
    });
  });
}

// =========================================
// INICIALIZAÇÃO GERAL
// =========================================

window.addEventListener("DOMContentLoaded", () => {
  carregarEquipe();
  inicializarGaleriaPrincipal();
  inicializarSlidersWear();
});
