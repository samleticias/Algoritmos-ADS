// Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)
import {question} from 'readline-sync'

// entrada
var temp_celsius = Number(question('temperatura em Celsius: '))


// processamento
var temp_fah = (9 * temp_celsius + 160) / 5 

// saída
console.log(`Temperatura em Celsius: ${temp_celsius}ºC\nTemperatura em Fahrenheit: ${temp_fah}ºF`)