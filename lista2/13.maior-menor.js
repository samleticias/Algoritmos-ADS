// Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são
// diferentes.

import { question } from 'readline-sync'

function main() {
    const n1 = get_number('Digite um número: ')
    const n2 = get_number('Digite um número: ')
    const n3 = get_number('Digite um número: ')
    const n4 = get_number('Digite um número: ')
    const n5 = get_number('Digite um número: ')

    const maior = encontrar_maior(n1, n2, n3, n4, n5)
    const menor = encontrar_menor(n1, n2, n3, n4, n5)

    console.log(`O maior número é: ${maior}`)
    console.log(`O menor número é: ${menor}`)
}

function encontrar_maior(n1, n2, n3, n4, n5) {
    let maior = n1

    if (n2 > maior) {
        maior = n2
    }
    if (n3 > maior) {
        maior = n3
    }
    if (n4 > maior) {
        maior = n4
    }
    if (n5 > maior) {
        maior = n5
    }

    return maior
}

function encontrar_menor(n1, n2, n3, n4, n5) {
    let menor = n1

    if (n2 < menor) {
        menor = n2
    }
    if (n3 < menor) {
        menor = n3
    }
    if (n4 < menor) {
        menor = n4
    }
    if (n5 < menor) {
        menor = n5
    }

    return menor
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()