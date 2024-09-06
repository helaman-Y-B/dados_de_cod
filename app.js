function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
      //Se alguém coloca só um espaço, tudo vai aparecer, buscar resolover.
      section.innerHTML = "<p>Nada foi encontrado. você precisa digitar o nome do jogo ou algo relacionado ao jogo.</p>";
      console.log("Nada foi pesquisado")
      return
    }
    // Converte o campoPesquisa em letras minusculas
    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {

      // Converte o Titulo e a descrição para letras minusculas
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLocaleLowerCase();

      // Concatena o HTML de cada resultado à string 'resultados'
      // Se titulo includes campoPesquisa ou descricao includes
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Então crie um novo elemento...
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `
      };
      console.log(dado.titulo.includes(campoPesquisa));
    }

    // Se resultados não existe na base de dados
    if (!resultados) {
      //então mostre...
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atribui a string com todos os resultados ao innerHTML da seção
    section.innerHTML = resultados;
  };