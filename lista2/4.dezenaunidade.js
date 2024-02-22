// Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
// do algarismo da unidade.

import { question } from 'readline-sync'

function main() {
    console.log('|**** DEZENA E UNIDADE ****|')

    const numero = dois_digitos('Número: ')

    const dezena = Math.floor(numero / 10)
    const unidade = numero % 10

    if (dezena === unidade) {
        console.log('O algarismo da dezena é igual ao algarismo da unidade')
    } else {
        console.log('O algarismo da dezena é diferente do algarismo da unidade')
    }
}

function dois_digitos(texto) {
    const numero = Number(question(texto))

    if (numero >= 10 && numero <= 99) {
        return numero
    } else {
        console.log('digite um número de dois dígitos')
        return dois_digitos(texto)
    }
}

main()
