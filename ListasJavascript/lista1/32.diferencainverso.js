// Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
import {question} from 'readline-sync'

// entrada
var numero = Number(question("Digite um número inteiro de 3 dígitos: "));
var numero = parseInt(numero);

// processamento
var inverso = parseInt(numero.toString().split("").reverse().join(""));
var diferenca = numero - inverso;

// saída
console.log(`O número ${numero} menos seu inverso (${inverso}) é igual a ${diferenca}.`);