// Conversões
// Tipo de dado
// booleanos

// =   | Atribui valor
// ==  | Equivale valores
// === | Equivale valores e tipos de dado

// Conveersão implicita
const numero = 456;
const numeroString = '456';

// console.log(numero + numeroString); //-->> "==" somente a equivalencia do valor, sem o tipo

// Conversão explicita
//Number() => passa um valor String para Número
//String() => passa uma valor Numerico para String
console.log(numero + Number(numeroString));

