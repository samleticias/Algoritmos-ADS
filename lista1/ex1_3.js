import { question } from 'readline-sync'
console.log('... Calcular horas e minutos...')

// entrada
var valor_m = Number(question('Valor em minutos: '))

// processamento
var valor_h = Math.floor(valor_m / 60);
let minutos = valor_m % 60;

// saída
console.log(`>${valor_m} minutos é equivalente a ${valor_h} horas e ${minutos} minutos.`)