// Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)
import {question} from 'readline-sync'

// entrada 
var numero = Number(question('numero: '))

// processamento
var inverso = parseInt(numero.toString().split('').reverse().join(''));

// saída
console.log(`Número: ${numero}, Inverso: ${inverso}`);
