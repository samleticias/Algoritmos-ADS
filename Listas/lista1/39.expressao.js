import {question} from 'readline-sync'
// entrada
const numero1 = Number(question('Insira o primeiro número de 3: '))
const numero2 = Number(question('Insira o segundo número de 3: '))
const numero3 = Number(question('Insira o terceiro número de 3: '))

// processamento
const R = (numero1+numero2)**2
const S = (numero2+numero3)**2
const D = (R+S)/2

// saída
console.log('D((R+S)/2) é igual a', D,'\nOBS: R = (numero1+numero2)**2 = ', R , 'e S = (numero2+numero3)**2 = ', S ) 
