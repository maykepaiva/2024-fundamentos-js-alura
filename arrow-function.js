function apresentar(nome) {
    return `meu nome é ${nome}`
}

const apresentarArrow = nome => `meu nome é ${nome}`
const soma = (num1, num2) =>num1 + num2;

const apenasNumeroPequeno = (num1, num2) => (num1 > 9 || num2 > 9) ?'somente numeros de 1 a 9':num1 + num2

console.log(apenasNumeroPequeno(11,9))