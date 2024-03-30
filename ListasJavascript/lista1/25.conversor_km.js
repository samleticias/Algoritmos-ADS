// Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.
import {question} from 'readline-sync'

// entrada
var valor_m = Number(question('valor em metros: '))

// processamento
var valor_km = valor_m / 1000

// saída
console.log(`Valor em metros: ${valor_m.toFixed(2)}\nValor em quilômetros: ${valor_km.toFixed(2)}`)