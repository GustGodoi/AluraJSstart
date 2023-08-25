// Expressões

// DECLARAÇÃO DE FUNÇÃO
// function minhaFuncao(param) {
//     // bloco de código
// }

// minhaFuncao("param");


// EXPRESSÃO DE FUNÇÃO
// função não precisa de um nome e a chamada do log parte da const
// const soma = function(num1, num2) {return num1 + num2}
// console.log(soma(2, 5));

// diferença principal ??
// funções e car são "listadas" no topo do código, mas outras caríaveis não.
console.log(apresentar())
function apresentar() {
    return "olá";
}

// ERRO DE CANNOT ACCESS
// console.log(soma(2, 5)); 
// const soma = function(num1, num2) {return num1 + num2}

// FORMA CORRETA
const soma = function(num1, num2) {return num1 + num2}
console.log(soma(2, 5)); 