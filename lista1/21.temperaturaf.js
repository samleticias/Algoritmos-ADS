// Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).
import {question} from 'readline-sync'

// entrada
var temp_fahrenheit = Number(question('temperatura em Fahrenheit: '))

// processamento
var temp_celsius = (5 * temp_fahrenheit - 160) / 9

// saída
console.log(`Temperatura em Celsius: ${temp_celsius.toFixed(2)}`)
