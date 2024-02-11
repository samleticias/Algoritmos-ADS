// Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
// corresponde.
import {question} from 'readline-sync'

// entrada
var minutosInput = Number(question("Digite o número inteiro de minutos: "));
var minutos = parseInt(minutosInput);

// processamento
var dias = Math.floor(minutos / (24 * 60));
var horas = Math.floor((minutos % (24 * 60)) / 60);
var minutosRestantes = minutos % 60;

// saída
console.log(`${minutos} minutos correspondem a:`);
console.log(`${dias} dias, ${horas} horas e ${minutosRestantes} minutos.`);