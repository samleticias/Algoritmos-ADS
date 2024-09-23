// Leia um valor em m, calcule e escreva o equivalente em cm.
import {question} from 'readline-sync'

// entrada
var valor_metro = Number(question('valor em metros:'))

// processamento
var valor_cm = valor_metro * 100

// saída
console.log(`Valor em centímetros: ${valor_cm.toFixed(2)}`)