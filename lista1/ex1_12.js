// Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.
import {question} from 'readline-sync'

// entrada 
var salario = Number(question('Salário R$: '))

// processamento
var novo_salario = salario * 1.25

// saída
console.log(`> Salário: R$${salario}\nValor com aumento R$: ${novo_salario}.`)

