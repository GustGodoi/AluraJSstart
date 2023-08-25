// Funções

// let x = "";
// console.log(x);
// x = "oi";

// DECLARAÇÃO DE FUNÇÃO
// 1 - declara e diz o que a função faz
function imprimeTexto(texto) {
    console.log(texto)
}

// 2 - Executa a função N vezes
imprimeTexto(soma());  //-->> Função counsumindo outra função
// imprimeTexto("oi");
// imprimeTexto("outro texto");

// Três formas de escrever funções

// Usando o return para buscar informações de dentro de uma função, como respost 
function soma() {
    // Outros Código
    return 2 + 2; // -->> return deve ser a última linha da function, é o exit da function
}

// console.log(soma());
