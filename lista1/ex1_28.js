// Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele
// corresponde.
import {question} from 'readline-sync'

// entrada
var quant_horas = Number(question('quantidade de horas: '))

// processamento
var quant_sem = Math.floor(quant_horas / 7);
var quant_dias = Math.floor(quant_sem % 7);
var quant_horas = quant_dias % 24;

// saída
console.log(`quantidade de horas: ${quant_horas}\nQuantidade de semanas: ${quant_sem}\nQuantidade de dias: ${quant_dias}\n Quantidade de horas :${quant_horas}`)