// Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.
import { question } from 'readline-sync'
console.log('... Leitor de números ...')

// entrada
var n1 = Number(question('Primeiro número: '))
var n2 = Number(question('Segundo número: '))
var n3 = Number(question('Terceiro número: '))


// processamento
var somatorio1 = n1 + n2
var diferenca = n2 - n3


// saída
console.log(`> A soma entre ${n1} e ${n2} é ${somatorio1} e a diferença entre ${n2} e ${n3} é ${diferenca}.`)