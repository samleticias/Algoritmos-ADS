// Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.

import { question } from 'readline-sync'

function main() {
    const n1 = get_number('Digite um número: ')
    const n2 = get_number('Digite um número: ')
    const n3 = get_number('Digite um número: ')
    const n4 = get_number('Digite um número: ')
    const n5 = get_number('Digite um número: ')

    const media = verificar_media(n1, n2, n3, n4, n5)
    const maiores = verificar_maiores(n1, n2, n3, n4, n5, media)

    console.log('A média entre os cinco números equivale a ', media, '.')
    console.log('Os números maiores que a média são: ', maiores)
}

function verificar_media(n1, n2, n3, n4, n5) {
    return (n1 + n2 + n3 + n4 + n5) / 5
}

function verificar_maiores(n1, n2, n3, n4, n5, media) {
    const numeros = [n1, n2, n3, n4, n5]
    const maiores = []

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > media) {
            maiores.push(numeros[i])
        }
    }

    return maiores
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()
