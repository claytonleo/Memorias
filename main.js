
document.addEventListener("DOMContentLoaded", () => {

  // =====================================
  // 1. DADOS DAS REDAÇÕES
  // =====================================

  const redacoes = [
    {
      titulo: "Minha história",
      categoria: "Autobiografia",
      descricao: "Um pouco sobre minha trajetória.",
      imagem: "imagens/redacao1.jpg",
      texto: "Aqui você pode contar sua história, falar sobre sua família, suas experiências e os momentos importantes da sua vida."
    },
    {
      titulo: "Minhas lembranças",
      categoria: "Memórias",
      descricao: "Recordações especiais da minha vida.",
      imagem: "imagens/redacao2.jpg",
      texto: "Algumas lembranças permanecem conosco durante toda a vida. São momentos especiais que nos fazem recordar pessoas, lugares e experiências."
    },
    {
      titulo: "A importância da família",
      categoria: "Reflexão",
      descricao: "Uma reflexão sobre a família.",
      imagem: "imagens/redacao3.jpg",
      texto: "A família é muito importante em nossa trajetória. É com ela que aprendemos valores, recebemos carinho e construímos nossas primeiras experiências."
    },
    {
      titulo: "Minha infância",
      categoria: "Memórias",
      descricao: "Recordações dos primeiros anos de vida.",
      imagem: "imagens/redacao4.jpg",
      texto: "A infância é uma fase cheia de descobertas, brincadeiras e aprendizados. Cada experiência contribui para formar quem somos."
    },
    {
      titulo: "O valor da amizade",
      categoria: "Reflexão",
      descricao: "A importância das amizades verdadeiras.",
      imagem: "imagens/redacao5.jpg",
      texto: "A amizade é construída com confiança, respeito e carinho. Os amigos tornam nossa caminhada mais feliz e especial."
    },
    {
      titulo: "Minha vida escolar",
      categoria: "Vida escolar",
      descricao: "Experiências vividas na escola.",
      imagem: "imagens/redacao6.jpg",
      texto: "A escola é um lugar de aprendizado, descobertas e amizades. Cada ano representa uma nova oportunidade de crescer."
    },
    {
      titulo: "Sonhos para o futuro",
      categoria: "Reflexão",
      descricao: "Meus sonhos e objetivos.",
      imagem: "imagens/redacao7.jpg",
      texto: "Todos temos sonhos e objetivos. Com dedicação e persistência, podemos construir o futuro que desejamos."
    },
    {
      titulo: "Um momento inesquecível",
      categoria: "Memórias",
      descricao: "Um acontecimento especial.",
      imagem: "imagens/redacao8.jpg",
      texto: "Existem momentos que ficam guardados para sempre em nossa memória. São experiências que nos ensinam e nos emocionam."
    },
    {
      titulo: "A importância da educação",
      categoria: "Educação",
      descricao: "O papel da educação em nossas vidas.",
      imagem: "imagens/redacao9.jpg",
      texto: "A educação é essencial para o desenvolvimento das pessoas. Por meio dela adquirimos conhecimentos e oportunidades."
    },
    {
      titulo: "O mundo em que vivemos",
      categoria: "Sociedade",
      descricao: "Uma reflexão sobre a sociedade.",
      imagem: "imagens/redacao10.jpg",
      texto: "O mundo está em constante transformação. Precisamos respeitar as diferenças e contribuir para uma sociedade melhor."
    },
    {
      titulo: "Tecnologia e sociedade",
      categoria: "Tecnologia",
      descricao: "A tecnologia no nosso cotidiano.",
      imagem: "imagens/redacao11.jpg",
      texto: "A tecnologia está presente em nossas vidas, facilitando a comunicação, os estudos e o acesso à informação."
    },
    {
      titulo: "Respeito às diferenças",
      categoria: "Cidadania",
      descricao: "A importância do respeito.",
      imagem: "imagens/redacao12.jpg",
      texto: "Cada pessoa possui características e opiniões próprias. Respeitar as diferenças é fundamental para uma boa convivência."
    },
    {
      titulo: "O meio ambiente",
      categoria: "Natureza",
      descricao: "A importância de preservar a natureza.",
      imagem: "imagens/redacao13.jpg",
      texto: "Cuidar do meio ambiente é responsabilidade de todos. Pequenas atitudes podem ajudar a preservar nosso planeta."
    },
    {
      titulo: "A força da persistência",
      categoria: "Motivação",
      descricao: "A importância de não desistir.",
      imagem: "imagens/redacao14.jpg",
      texto: "Nem sempre alcançar nossos objetivos é fácil. Persistir diante das dificuldades nos ajuda a aprender e crescer."
    },
    {
      titulo: "As mudanças da vida",
      categoria: "Reflexão",
      descricao: "Como as experiências nos transformam.",
      imagem: "imagens/redacao15.jpg",
      texto: "Ao longo da vida passamos por mudanças e experiências que transformam nossa maneira de pensar."
    },
    {
      titulo: "Minhas conquistas",
      categoria: "Autobiografia",
      descricao: "Conquistas importantes da minha trajetória.",
      imagem: "imagens/redacao16.jpg",
      texto: "Cada conquista representa dedicação e aprendizado. Até mesmo as pequenas vitórias merecem ser valorizadas."
    },
    {
      titulo: "O futuro que desejo",
      categoria: "Reflexão",
      descricao: "Meus planos para o futuro.",
      imagem: "imagens/redacao17.jpg",
      texto: "Quero continuar aprendendo, realizando meus sonhos e construindo uma história da qual possa me orgulhar."
    }
  ];

  // =====================================
  // 2. MEMÓRIAS DE INFÂNCIA
  // =====================================

  const infancia = [
    {
      titulo: "Minhas primeiras lembranças",
      imagem: "imagens/infancia1.jpg",
      descricao: "Recordações especiais dos meus primeiros anos."
    },
    {
      titulo: "Brincadeiras de infância",
      imagem: "imagens/infancia2.jpg",
      descricao: "Momentos de diversão e alegria."
    },
    {
      titulo: "Momentos em família",
      imagem: "imagens/infancia3.jpg",
      descricao: "Lembranças ao lado das pessoas que amo."
    },
    {
      titulo: "Passeios especiais",
      imagem: "imagens/infancia4.jpg",
      descricao: "Lugares e experiências inesquecíveis."
    },
    {
      titulo: "Datas comemorativas",
      imagem: "imagens/infancia5.jpg",
      descricao: "Celebrações que marcaram minha infância."
    },
    {
      titulo: "Minha infância feliz",
      imagem: "imagens/infancia6.jpg",
      descricao: "Pequenos momentos que se tornaram grandes lembranças."
    }
  ];

  // =====================================
  // 3. VIDA ESCOLAR
  // =====================================

  const escola = [
    {
      titulo: "Primeiros dias de aula",
      imagem: "imagens/escola1.jpg",
      descricao: "O começo de uma caminhada de descobertas."
    },
    {
      titulo: "Meus colegas",
      imagem: "imagens/escola2.jpg",
      descricao: "Pessoas especiais que conheci na escola."
    },
    {
      titulo: "Atividades escolares",
      imagem: "imagens/escola3.jpg",
      descricao: "Trabalhos e atividades de aprendizado."
    },
    {
      titulo: "Eventos escolares",
      imagem: "imagens/escola4.jpg",
      descricao: "Momentos especiais vividos na escola."
    },
    {
      titulo: "Professores especiais",
      imagem: "imagens/escola5.jpg",
      descricao: "Pessoas que contribuíram para minha formação."
    },
    {
      titulo: "Minha trajetória escolar",
      imagem: "imagens/escola6.jpg",
      descricao: "Uma caminhada de amizades e conquistas."
    }
  ];

  // =====================================
  // 4. SELEÇÃO DOS ELEMENTOS
  // =====================================

  const paginas = document.querySelectorAll(".pagina");
  const botoes = document.querySelectorAll(".nav-btn");

  const listaRedacoes = document.getElementById("lista-redacoes");
  const busca = document.getElementById("busca");

  const detalhe = document.getElementById("detalhe-redacao");
  const conteudo = document.getElementById("conteudo-redacao");
  const voltar = document.getElementById("voltar-redacoes");

  const galeriaInfancia = document.getElementById("galeria-infancia");
  const galeriaEscola = document.getElementById("galeria-escola");

  const ferramentas = document.querySelector(".ferramentas");

  // =====================================
  // 5. NAVEGAÇÃO
  // =====================================

  function navegar(id) {
    paginas.forEach(pagina => {
      pagina.classList.toggle("ativa", pagina.id === id);
    });

    botoes.forEach(botao => {
      botao.classList.toggle("active", botao.dataset.page === id);
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      navegar(botao.dataset.page);
    });
  });

  document.querySelectorAll("[data-go]").forEach(botao => {
    botao.addEventListener("click", () => {
      navegar(botao.dataset.go);
    });
  });

  // =====================================
  // 6. MOSTRAR REDAÇÕES
  // =====================================

  function mostrarRedacoes(lista) {
    listaRedacoes.innerHTML = "";

    if (lista.length === 0) {
      listaRedacoes.textContent = "Nenhuma redação encontrada.";
      return;
    }

    lista.forEach(redacao => {
      const indice = redacoes.indexOf(redacao);

      const cartao = document.createElement("article");
      cartao.className = "cartao";

      const imagem = document.createElement("img");
      imagem.src = redacao.imagem;
      imagem.alt = redacao.titulo;
      imagem.loading = "lazy";

      const area = document.createElement("div");
      area.className = "cartao-conteudo";

      const categoria = document.createElement("small");
      categoria.textContent = redacao.categoria;

      const titulo = document.createElement("h3");
      titulo.textContent = redacao.titulo;

      const descricao = document.createElement("p");
      descricao.textContent = redacao.descricao;

      const botao = document.createElement("button");
      botao.textContent = "Ler redação →";

      botao.addEventListener("click", () => {
        abrirRedacao(indice);
      });

      area.append(categoria, titulo, descricao, botao);
      cartao.append(imagem, area);

      listaRedacoes.appendChild(cartao);
    });
  }

  // =====================================
  // 7. ABRIR REDAÇÃO
  // =====================================

  function abrirRedacao(indice) {
    const redacao = redacoes[indice];

    if (!redacao) return;

    listaRedacoes.classList.add("escondido");
    ferramentas.classList.add("escondido");
    detalhe.classList.remove("escondido");

    conteudo.innerHTML = "";

    const categoria = document.createElement("small");
    categoria.textContent = redacao.categoria;

    const titulo = document.createElement("h2");
    titulo.textContent = redacao.titulo;

    const imagem = document.createElement("img");
    imagem.src = redacao.imagem;
    imagem.alt = redacao.titulo;

    const texto = document.createElement("div");
    texto.className = "texto-redacao";
    texto.textContent = redacao.texto;

    conteudo.append(categoria, titulo, imagem, texto);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // =====================================
  // 8. VOLTAR PARA REDAÇÕES
  // =====================================

  voltar.addEventListener("click", () => {
    detalhe.classList.add("escondido");
    listaRedacoes.classList.remove("escondido");
    ferramentas.classList.remove("escondido");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // =====================================
  // 9. PESQUISA DE REDAÇÕES
  // =====================================

  busca.addEventListener("input", () => {
    const termo = normalizar(busca.value);

    const filtradas = redacoes.filter(redacao => {
      const texto = normalizar(
        redacao.titulo + " " +
        redacao.categoria + " " +
        redacao.descricao + " " +
        redacao.texto
      );

      return texto.includes(termo);
    });

    mostrarRedacoes(filtradas);
  });

  function normalizar(texto) {
    return texto
      .toLocaleLowerCase("pt-BR")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  // =====================================
  // 10. CRIAR GALERIAS
  // =====================================

  function criarGaleria(dados, elemento) {
    dados.forEach(item => {
      const cartao = document.createElement("article");
      cartao.className = "cartao";

      const imagem = document.createElement("img");
      imagem.src = item.imagem;
      imagem.alt = item.titulo;
      imagem.loading = "lazy";

      const area = document.createElement("div");
      area.className = "cartao-conteudo";

      const titulo = document.createElement("h3");
      titulo.textContent = item.titulo;

      const descricao = document.createElement("p");
      descricao.textContent = item.descricao;

      area.append(titulo, descricao);
      cartao.append(imagem, area);

      elemento.appendChild(cartao);
    });
  }

  // =====================================
  // 11. INICIALIZAÇÃO
  // =====================================

  mostrarRedacoes(redacoes);

  criarGaleria(infancia, galeriaInfancia);

  criarGaleria(escola, galeriaEscola);

})
