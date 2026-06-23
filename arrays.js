// Exemplo de manipulação de arrays

let num = [5, 8, 2, 9, 3]

// Adiciona um novo valor ao final do vetor
num.push(1)

// Organiza os valores em ordem crescente
num.sort()

// Substitui o valor da posição 4
num[4] = 3

console.log(num)

console.log(`O valor da posição 3 é ${num[3]}`)

console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

// Procura a posição do valor 3
let pos = num.indexOf(3)

console.log(`O valor 3 está na posição ${pos}`)
