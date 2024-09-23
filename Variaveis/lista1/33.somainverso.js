// Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
// (Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).
import {question} from 'readline-sync'

// entrada
var numero = Number(question("Digite um número inteiro de 3 dígitos: "));
var numero = parseInt(numero);

// processamento
var inverso = parseInt(numero.toString().split("").reverse().join(""));
var soma = numero + inverso;

// saída 
console.log(`O número ${numero} mais seu inverso (${inverso}) é igual a ${soma}.`);