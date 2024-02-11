// Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.
import {question} from 'readline-sync'

// entrada
var nota1 = Number(question('primeira nota: '))
var nota2= Number(question('segunda nota: '))
var nota3 = Number(question('terceira nota: '))
var peso1 = Number(question('primeiro peso: '))
var peso2 = Number(question('segundo peso: '))
var peso3 = Number(question('terceiro peso: '))

// processamento
var media_ponderada = (nota1*peso1 + nota2*peso2 + nota3*peso3) / (peso1+peso2+peso3)

// saída
console.log(`> Primeira nota: ${nota1} -- primeiro peso: ${peso1}\nSegunda nota: ${nota2} -- segundo peso: ${peso2}\nTerceira nota: ${nota3} -- terceiro peso: ${peso3}.`)
console.log(`Média ponderada: ${media_ponderada}`)