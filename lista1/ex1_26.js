// Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.
import {question} from 'readline-sync'

// entrada
var num_dias = Number(question('numero de dias: '))

// processamento
var quant_sem = num_dias / 7

// saída
console.log(`numero de dias: ${num_dias}\nQuantidade de semanas: ${quant_sem.toFixed(0)}`)