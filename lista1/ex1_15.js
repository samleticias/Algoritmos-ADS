// Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)
import {question} from 'readline-sync'

// entrada
var base = Number(question('valor da base: '))
var altura = Number(question('valor da altura: '))


// processamento
var area = (base * altura) / 2

// saída
console.log(`Área do triângulo: ${area.toFixed(2)}`)