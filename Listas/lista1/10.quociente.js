// Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.
import {question} from 'readline-sync'

// entrada
var n1 = Number(question('primeiro numero: '))
var n2 = Number(question('segundo numero: '))

// processamento 
var quociente = n1 / n2
var resto = n1 % n2

// saída
console.log(`> O quociente da divisão entre ${n1} e ${n2} é ${quociente} e o resto da divisão é ${resto}.`)
