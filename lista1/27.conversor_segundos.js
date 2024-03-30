// Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
// segundos ele corresponde.
import {question} from 'readline-sync'

// entrada
var quant_seg = Number(question('quantidade de segundos: '))

// processamento
 var horas = Math.floor(quant_seg / 3600);
 var minutos = Math.floor((quant_seg % 3600) / 60);
 var segundos = quant_seg % 1;

// saída
console.log(`numero de segundos: ${quant_seg}\nHora ${horas}:${minutos}:${segundos}`)