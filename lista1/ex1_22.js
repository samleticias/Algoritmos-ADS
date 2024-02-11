// Leia um valor em km, calcule e escreva o equivalente em m.
import {question} from 'readline-sync'

// entrada
var valor_km = Number(question('Valor em Km: '))

// processamento
var valor_m = valor_km / 1000

// saída
console.log(`Valor em metros: ${valor_m.toFixed(2)}`)