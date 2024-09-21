// Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.
import { question } from 'readline-sync';

// entrada
var idadeDias = Number(question("Digite a idade em dias: "));
var diasAno = 365;
var diasMes = 30;

// processamento
var anos = Math.floor(idadeDias / diasAno);
var meses = Math.floor((idadeDias % diasAno) / diasMes);
var diasRestantes = idadeDias % diasMes;

// saída
console.log(`A idade expressa em anos, meses e dias é: ${anos} anos, ${meses} meses e ${diasRestantes} dias.`);