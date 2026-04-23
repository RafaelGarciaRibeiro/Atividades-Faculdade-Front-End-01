// ==========================================
// QUESTÃO 03: Alternar itens dos grupos
// ==========================================
function proximoGrupo() {
    // Pegando as DIVs dos cartões originais pelos IDs
    const cartao1 = document.getElementById("cartao-grupo1");
    const cartao2 = document.getElementById("cartao-grupo2");
    const cartao3 = document.getElementById("cartao-grupo3");

    // Inserindo o novo conteúdo HTML dentro das DIVs (mantendo a classe CSS intacta)
    
    // Grupo D
    cartao1.innerHTML = `
        <h2>🅳 Grupo D</h2>
        <h3>Seleções</h3>
        <ul>
            <li>Estados Unidos</li>
            <li>Paraguai</li>
            <li>Austrália</li>
            <li>Turquia</li>
        </ul>
        <details>
            <summary>Saiba Mais</summary>
            <p><strong>Fatos:</strong> Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios.</p>
        </details>
    `;

    // Grupo E
    cartao2.innerHTML = `
        <h2>🅴 Grupo E</h2>
        <h3>Seleções</h3>
        <ul>
            <li>Alemanha</li>
            <li>Equador</li>
            <li>Costa do Marfim</li>
            <li>Curaçao</li>
        </ul>
        <details>
            <summary>Saiba Mais</summary>
            <p><strong>Fatos:</strong> Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes.</p>
        </details>
    `;

    // Grupo F (O fato copiado exatamente como está no descritivo da prova)
    cartao3.innerHTML = `
        <h2>🅵 Grupo F</h2>
        <h3>Seleções</h3>
        <ul>
            <li>Holanda</li>
            <li>Japão</li>
            <li>Tunísia</li>
            <li>Suécia</li>
        </ul>
        <details>
            <summary>Saiba Mais</summary>
            <p><strong>Fatos:</strong> Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas.</p>
        </details>
    `;
}

// ==========================================
// QUESTÃO 04: Adicionar Novo Card de Jogador
// ==========================================
function add() {
    // 1. Identificar o container onde os cards ficam
    const container = document.getElementById("jogadores-container");

    // 2. Criar uma nova div para ser o novo card
    const novoCard = document.createElement("div");
    
    // 3. Adicionar a mesma classe CSS para manter o layout
    novoCard.className = "card-jogador";

    // 4. Inserir o conteúdo HTML do Paquetá
    // ATENÇÃO: Usei Lucas_Paqueta.webp porque é exatamente como está salvo no seu VS Code!
    novoCard.innerHTML = `
        <img src="Lucas_Paqueta.webp" alt="Lucas Paquetá">
        <div class="jogador-info">
            <p><strong>Nome:</strong> Lucas Tolentino C. de Lima</p>
            <p><strong>Data de Nasc:</strong> 27/08/1997 (28 anos)</p>
            <p><strong>Altura:</strong> 1,80 m</p>
            <p><strong>Posição:</strong> Meio-campista</p>
            <p><strong>Rank:</strong> ⭐ 8,8</p>
        </div>
    `;

    // 5. Anexar o novo card ao container (ele vai aparecer ao lado do anterior)
    container.appendChild(novoCard);
}