// ==========================================
// QUESTÃO 03: Função para mostrar a tabela
// ==========================================
function mostrarTabela() {
    const imagemTabela = document.createElement("img");
    
    // Nome exato da imagem na sua pasta prova 3
    imagemTabela.src = "Tabela_Jogos.png"; 
    imagemTabela.alt = "Tabela Oficial - Copa do Mundo 2026";
    imagemTabela.className = "tabela-imagem-inserida";

    const contenerTabela = document.getElementById("contener-tabela");
    
    if (!document.querySelector(".tabela-imagem-inserida")) {
        contenerTabela.appendChild(imagemTabela);
        // Oculta o botão após inserir
        document.getElementById("btn-tabela").style.display = "none";
    }
}

// ==========================================
// QUESTÃO 04: Função Revelar Jogador
// ==========================================
function revelar() {
    const dadosJogador = {
        nome: "Vinícius José Paixão de Oliveira Júnior",
        nascimento: "12/07/2000 (25 anos)",
        altura: "1,76 m",
        posicao: "Ponta-esquerda / Atacante",
        rank: "9,5"
    };

    const imagemPerfil = document.getElementById("img-perfil"); 
    if (imagemPerfil) {
        // Nome exato da imagem do Vini Jr. na sua pasta prova 3
        imagemPerfil.src = "_vinicius_junior.png";
    }

    // Substituir conteúdos dos <span>
    const spanNome = document.getElementById("span-nome");
    const spanNascimento = document.getElementById("span-nascimento");
    const spanAltura = document.getElementById("span-altura");
    const spanPosicao = document.getElementById("span-posicao");
    const spanRank = document.getElementById("span-rank");

    if (spanNome) spanNome.textContent = dadosJogador.nome;
    if (spanNascimento) spanNascimento.textContent = dadosJogador.nascimento;
    if (spanAltura) spanAltura.textContent = dadosJogador.altura;
    if (spanPosicao) spanPosicao.textContent = dadosJogador.posicao;
    if (spanRank) spanRank.textContent = dadosJogador.rank;

    // Remover "placeholder" e aplicar "card-text"
    const elementosSpans = document.querySelectorAll(".revelacao-card span.placeholder");

    elementosSpans.forEach((span) => {
        span.removeAttribute('class');
        span.classList.add("card-text");
    });

    // Oculta o botão de revelar após clicar
    document.getElementById("btn-revelar").style.display = "none";
}