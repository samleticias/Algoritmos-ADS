// Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
import {question} from 'readline-sync'

// entrada
var binarioInput = Number(question("Digite um número binário de 4 dígitos: "));
var binario = binarioInput;

// processamento
var decimal = 0;
decimal += binario[0] * Math.pow(2, 3);
decimal += binario[1] * Math.pow(2, 2);
decimal += binario[2] * Math.pow(2, 1);
decimal += binario[3] * Math.pow(2, 0);

// saída
console.log(`${binario} em binário é equivalente a ${decimal} em decimal.`);