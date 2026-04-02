const produtos = {
    "123": {"nome": "Jorge e Mateus", "preco": 9.0000},
    "456": {"nome": "Fala Mansa", "preco": 3.0000},
    "789": {"nome": "Sabrina Carpintcher", "preco": 12.0000},
    "147": {"nome": "Gaucho da Fronteira", "preco": 90.5000},
}

let carrinho = [];

const audio = new Audio("beep.mp3");

window.onload = () => {
    document.getElementById("cod").focus();
}

function addProduto(){
    const codHtml = document.getElementById("cod")
    const qtdHtml = document.getElementById("qtd")

    const valorCod = codHtml.value;
    const valorQtd = qtdHtml.value;

    if(!produtos[valorCod]){
        AlertItem();
        return;
    }

    const infoProduto = produtos[valorCod];

    const item = {
        nome: infoProduto.nome,
        preco: infoProduto.preco,
        quantidade: valorQtd,
        subtot: infoProduto.preco * valorQtd,
    };

    carrinho.push(item);
    audio.currentTime =0;
    audio.play();

    atualizarTela();

    qtdHtml.value = 1;
    codHtml.value = "";
}