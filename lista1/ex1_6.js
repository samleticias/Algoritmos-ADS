import { question } from 'readline-sync'
console.log('... Conversor de km/h para m/s ...')

// entrada
var velocidade_kmh = Number(question('Informe a velocidade em km/h: '))

// processamento
var velocidade_ms = velocidade_kmh / 3.6

// saída
console.log(`> ${velocidade_kmh}km/h equivale a ${velocidade_ms}m/s.`)