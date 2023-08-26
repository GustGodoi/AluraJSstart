//Declarações de vaiáveis
//var

// var altura = 5;
// var comprimento = 7;

// var area = altura * comprimento;
// console.log('area: ' + area)

// let
// let forma = 'retângulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retângulo') {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }

// console.log('area: ' + area)

// const com let
const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
// let area;

const area = (forma, altura, comprimento) => {
    if (forma === 'quadrado') {
        return altura * comprimento;
    } else if (forma === 'triangulo') {
        return (altura * comprimento) / 2;
    } else {
        return `valor informado campo forma: "${forma}", não esperado.`;
    }
}

console.log('Resultado do cálculo da área: ' + area(forma, altura, comprimento));