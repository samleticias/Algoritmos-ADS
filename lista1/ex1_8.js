// Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.
import {question} from 'readline-sync'

// entrada
var n1 = Number(question('Primeiro numero: '))
var n2 = Number(question('Segundo numero: '))

// processamento
var soma = n1 + n2
var subtracao = n1 - n2
var operacao = soma / subtracao

// saída
console.log(`> A soma entre ${n1} e ${n2} é ${soma} , a diferença entre ${n1} e ${n2} é ${subtracao} e a divisão entre a soma e a subtração é ${operacao}.`)
