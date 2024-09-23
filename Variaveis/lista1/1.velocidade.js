import { question } from 'readline-sync'
console.log('... Conversor de m/s para km/h ...')

// entrada
var velocidade_ms = Number(question('velocidade em m/s: '))

// processamento
var velocidade_kmh = velocidade_ms * 3.6

// saída
console.log(`> ${velocidade_ms}m/s equivale a ${velocidade_kmh}km/h`)