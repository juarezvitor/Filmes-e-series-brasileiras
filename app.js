function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos.
    // O ID "resultados-pesquisa" é usado como referência para encontrar o elemento.
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(campoPesquisa == "") {
      section.innerHTML = "<p>Digite um nome de filme ou série<p>"
      return}

    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar o HTML dos resultados.
    // Essa string será preenchida dinamicamente a cada iteração do loop.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item (dado) na base de dados (dados.js).
    // Para cada item, um novo elemento HTML será criado e adicionado à string 'resultados'.
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      //se titulo ou descricao estiver incluido 
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.linkcritica}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta"><strong>${dado.titulo}</strong>${dado.descricao}.</p>
          <a href="${dado.link}" target="_blank"><strong>Onde assistir</strong></a>
        </div>
      `;
      }
     if(!resultados,!tags){
      resultados = "<p>Filme ou série não foi encontrado<p>"
     } 
    } 
    // Substitui o conteúdo HTML da seção "resultados-pesquisa" pelo conteúdo gerado.
    section.innerHTML = resultados;
  }
