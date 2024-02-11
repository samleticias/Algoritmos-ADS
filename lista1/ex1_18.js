// Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)
import {question} from 'readline-sync'

// entrada
var raio = Number(question('raio da circunferência: '))
var pi = 3.14
// processamento
var comprimento = 2 * raio * pi

// saída
console.log(`Comprimento da circunferência: ${comprimento.toFixed(2)}`)