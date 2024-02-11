import { question } from 'readline-sync'

// Entrada
const valor_produto = Number(question('Insira o valor do produto a ser parcelado'))

// Processamento
const prestacao = valor_produto/3
const entrada = (valor_produto%3) + prestacao

// Saída
console.log('O valor de entrada do produto é R$' + Math.floor(entrada),'e o valor das duas prestações é R$' + Math.floor(prestacao))