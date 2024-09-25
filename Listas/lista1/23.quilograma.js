// Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
import {question} from 'readline-sync'

// entrada
var valor_kg = Number(question('valor em Kg: '))

// processamento
var valor_g = valor_kg / 1000

// saída
console.log(`Valor em gramas: ${valor_g.toFixed(2)}`)