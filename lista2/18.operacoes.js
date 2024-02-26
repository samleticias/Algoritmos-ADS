// 18. Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
// Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
// sobre os dois valores lidos.

import { question } from 'readline-sync'

function main() {
    const n1 = get_number('Primeiro número: ')
    const n2 = get_number('Segundo número: ')
    const op = get_number('Digite o código da operação desejada: ')

    const resultado = verificar_operacao(n1, n2, op)

    console.log(`O resultado da operação é ${resultado}`)
}

function verificar_operacao(n1, n2, op) {
    let resultado
    if (op === 1) {
        resultado = n1 + n2
    } else if (op === 2) {
        resultado = n1 - n2
    } else if (op === 3) {
        resultado = n1 * n2
    } else if (op === 4) {
        resultado = n1 / n2
    } else {
        console.log('Código de operação inválido!')
        return
    }
    return resultado
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()