// Leia 3 números, calcule e escreva a média dos números.
import { question } from "readline-sync";

// entrada
var n1 = Number(question('primeiro numero: '));
var n2 = Number(question('segundo numero: '));
var n3 = Number(question('terceiro numero: '));

// processamento
var media = (n1 + n2 + n3) / 3

// saída
console.log(`A média entre os números é ${media}.`);