import { question } from 'readline-sync'
console.log('... Calcular horas e minutos...')

// entrada
var valor_h = Number(question('Valor em horas: '))
var valor_m = Number(question('Valor em minutos: '))

// processamento
var valortotal_m = valor_m + (60 * valor_h)

// saída
console.log(`> ${valor_h} horas e ${valor_m} minutos equivale a ${valortotal_m} minutos totais`)