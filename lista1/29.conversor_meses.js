// Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
import {question} from 'readline-sync'

// entrada
var meses = Number(question('quantidade de meses: '))

// processamento
var anos = Math.floor(meses / 12);
var quant_meses = Math.floor(anos % 12);

// saída
console.log(`quantidade de meses: ${meses}\nQuantidade de anos: ${anos}\nQuantidade de meses: ${quant_meses}`)