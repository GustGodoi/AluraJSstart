// Arrow Function

function apresentar() {
    return `meu nome é ${nome}`;
}

// Arrow function
// Não pode ser nomeada
// Hoisting: Arrow function se comporta como expressão
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com mais de 1 linha de isntrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Informe somente números de a 9"
    } else {
        return num1 + num2;
    }
}


