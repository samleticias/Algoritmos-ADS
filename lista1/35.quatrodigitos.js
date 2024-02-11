// Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
// número = 9534 ; soma = 9+5+3+4 = 21.
import { question } from "readline-sync";

// entrada
var numero = Number(question("Digite um número inteiro de 4 dígitos: "));
var numero = parseInt(numero);

// processamento
var digito1 = Math.floor(numero / 1000);
var digito2 = Math.floor((numero % 1000) / 100);
var digito3 = Math.floor((numero % 100) / 10);
var digito4 = numero % 10;

var soma = digito1 + digito2 + digito3 + digito4;

// saída
console.log(`A soma dos dígitos de ${numero} é igual a ${soma}.`);