import { question } from 'readline-sync'

// Entrada
const a = Number(question('Insira o valor do coeficiente a: '))
const b = Number(question('Insira o valor do coeficiente b: '))
const c = Number(question('Insira o valor do coeficiente c: '))
const d = Number(question('Insira o valor do coeficiente d: '))
const e = Number(question('Insira o valor do coeficiente e: '))
const f = Number(question('Insira o valor do coeficiente f: '))

// Processamento
const x = ((c*e) - (b*f)) / ((a*e) - (b*d))
const y = ((a*f) - (c*d)) / ((a*e) - (b*d))

// Saída
console.log('O valor de x é', x.toFixed(2), 'e de Y é', y.toFixed(2)+'.')