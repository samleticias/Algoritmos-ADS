// Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)
import {question} from 'readline-sync'

// entrada
var raio = Number(question('raio da esfera: '))
var pi = 3.14

// processamento
var volume = 4 * pi * raio**3

// saída
console.log(`volume da esfera: ${volume.toFixed(2)}`)
