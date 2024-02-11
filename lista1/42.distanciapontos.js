import { question } from 'readline-sync'
// Entrada
const x1 = Number(question('Insira o x do ponto 1: '))
const y1 = Number(question('Insira o y do ponto 1: '))
const x2 = Number(question('Insira o x do ponto 2: '))
const y2 = Number(question('Insira o y do ponto 2: '))

// Processamento
const distancia = Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2))

// Saída
console.log('A distância entre esses dois pontos é',distancia.toFixed(2))

