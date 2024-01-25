const forma = 'quadrada'
const comprimento = 5
const altura = 3
// a area não pode ser inicializada se for 
// const area; o tipo const ele é mantido intacto
// por isso foi alterada para let
let area

if (forma==='quadrada') {
    area = comprimento * altura
} else {
    area = (altura* comprimento)/2
}

console.log(area)