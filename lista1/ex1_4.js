import { question } from 'readline-sync'
console.log('... Valor em dólar e real...')

// entrada
var valor_dolar = Number(question('Valor em dolar: '))

// processamento
var valor_real = valor_dolar * 5.00

// saída
console.log(`>${valor_dolar} dólares é equivalente a ${valor_real} reais.`)