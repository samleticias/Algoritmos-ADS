import { question } from "readline-sync"

// Entrada
const custo_fabrica = Number(question('Insira o custo de fábrica do carro desejado '))

// Processamento
const custo_consumidor = custo_fabrica + (custo_fabrica*0.28) + (custo_fabrica*0.45)

// Saída
console.log('O custo ao consumidor desse caro será: ',custo_consumidor)