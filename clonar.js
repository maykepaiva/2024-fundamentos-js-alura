const notas = [7,7,8,9]

const novaReferenciadaListaNotas =notas
// para copiar uma lista sem referenciar usar [...] e 
// quando for adicionar valor usar [...lista,10] ao invés de usar push
const novaClonadaListaNotas = [...notas,10]

// novaClonadaListaNotas.push(10)

console.log(notas)
console.log(novaReferenciadaListaNotas)
console.log(novaClonadaListaNotas)