// Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)
import {question} from 'readline-sync'

// entrada
var base = Number(question('valor da base: '))
var altura = Number(question('valor da altura: '))

// processamento
var area = base * altura

// saída
console.log(`Área do retângulo: ${area.toFixed(2)}`)
