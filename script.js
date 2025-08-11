const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);
    for (let i in palavras) {
        palavras[i] = palavras[i].toLowerCase();
    }

    let frequencias = {};
    for (let i of palavras) {
        frequencias[i] = 0;
        for (let j of palavras) {
            if (i == j) {
                frequencias[i]++;
            }
        }
    }
    return palavras;
}

function tiraPalavrasRuin(palavras) {
    const PALAVRAS_RUINS = new Set(["para", "uma", "nós"]);
    const palavrasBoas = [];
    for (let palavra of palavras) {
        if (!PALAVRAS_RUINS.has(palavra) && palavra.lenght > 2) {
            palavrasBoas.push(palavra);
        }
    }

    return palavrasBoas;
>>>>>>> f30272b0ddf1f3c6410a7bcd313f4b3cd6fc2e65
}

function tiraPalavrasRuin(palavras) {
    const PALAVRAS_RUINS = new Set(["para", "uma", "nós", "elas"]);
    const palavrasBoas = [];
    for (let palavra of palavras) {
        if (!PALAVRAS_RUINS.has(palavra) && palavra.lenght > 2) {
            palavrasBoas.push(palavra);
        }
    }

    return palavrasBoas;
}