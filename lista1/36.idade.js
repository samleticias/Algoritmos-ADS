// Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.
import { question } from 'readline-sync';

// entrada
var anos = Number(question("Digite a idade em anos: "));
var meses = Number(question("Digite a idade em meses: "));
var dias = Number(question("Digite a idade em dias: "));

// processamento
var idadeEmDias = (anos * 365) + (meses * 30) + parseInt(dias);

// saída
console.log(`A idade expressa em dias é: ${idadeEmDias} dias.`);


