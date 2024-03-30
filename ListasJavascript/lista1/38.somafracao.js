// Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o
// resultado em forma de fração.
import { question } from 'readline-sync';

// entrada
var numerador1 = Number(question("Digite o numerador da primeira fração: "));
var denominador1 = Number(question("Digite o denominador da primeira fração: "));

var numerador2 = Number(question("Digite o numerador da segunda fração: "));
var denominador2 = Number(question("Digite o denominador da segunda fração: "));

// processamento
numerador1 = parseInt(numerador1);
denominador1 = parseInt(denominador1);
numerador2 = parseInt(numerador2);
denominador2 = parseInt(denominador2);

var denominadorComum = denominador1 * denominador2;
var novoNumerador = (numerador1 * denominador2) + (numerador2 * denominador1);

// saída
console.log(`A soma das frações é: ${novoNumerador}/${denominadorComum}`);