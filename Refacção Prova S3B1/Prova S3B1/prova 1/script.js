function mostrarTabela() {
    const imagemTabela = document.createElement("img");
    
    // Apenas o nome do arquivo, pois a imagem e o script estão juntos
    imagemTabela.src = "Tabela_Jogos.png"; 
    imagemTabela.alt = "Tabela de Jogos Oficial - Copa do Mundo 2026";
    imagemTabela.className = "tabela-imagem-inserida";

    const contenerTabela = document.getElementById("contener-tabela");
    
    if (!document.querySelector(".tabela-imagem-inserida")) {
        contenerTabela.appendChild(imagemTabela);
        document.getElementById("btn-tabela").style.display = "none";
    }
}

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
        // Apenas o nome do arquivo
        imagemPerfil.src = "_vinicius_junior.png";
    }

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

    const elementosSpans = document.querySelectorAll(".revelacao-card span.placeholder");

    elementosSpans.forEach((span) => {
        span.removeAttribute('class');
        span.classList.add("card-text");
    });

    document.getElementById("btn-revelar").style.display = "none";
}