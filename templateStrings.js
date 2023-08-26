// Template String

const nome = "Ju";
const idade = 2021 - 1981;
const cidadeNascimento = "São Paulo";

// const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + 
// " e nasci na cidade de " + cidadeNascimento;

//templateString
const apresentacao = (nome, idade, cidadeNascimento) => {
    return `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeNascimento}`;
}

console.log(apresentacao(nome, idade, cidadeNascimento));