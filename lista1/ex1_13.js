// Leia um valor em real (R$), calcule e escreva 70% deste valor.
import {question} from 'readline-sync'

// entrada 
var valor_real = Number(question('Valor R$: '))

// processamento
var valor = valor_real * 0.7

// saída
console.log(`> Valor R$:${valor_real}\n70% do valor R$: ${valor}.`)
