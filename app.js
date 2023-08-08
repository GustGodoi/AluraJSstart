
idade = [30, 35, 28]
nome = ["Ana", "Juliana", "Leonardo"]
faculdade = [false, true, true]

funionarios = [nomes, idades, falculdades]

function eMaiorQue10(value) {
   return valeu >= 10;
}

var filtrado = numeros.filter(eMaiorQue10);
// filtrado é [12, 130, 44]

console.log(filtrado)

const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1, notas2, notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        media += notasGerais[i][j] / notasGerais[i].length;
    }
}

media = media / notasGerais.length

console.log(media)

testes()

function testes( ) {
    return 10
}

let TesteDeQuebraDeLinha = "Oi, tudo bem? Eu sou o Gustavo, esse texto é longo mesmo somente para testes da rolagem horizontal"

array = []
array.push(1)
console.log(array)

let PalavrasSimples = ["oi", "ok"]

for (let i = 0; i < PalavrasSimples.length; i++) {
    const element = PalavrasSimples[i];
    
}