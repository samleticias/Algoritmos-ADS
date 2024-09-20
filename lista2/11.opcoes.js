// Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
// valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
// possíveis para a variável opção são 1, 2 e 3.

import { question } from 'readline-sync'

function main() {
    const opcao = get_number('Digite a opção (1, 2 ou 3): ')

    const num1 = get_number('Digite o primeiro número: ')
    const num2 = get_number('Digite o segundo número: ')
    const num3 = get_number('Digite o terceiro número: ')

    const valorEscolhido = verificar_opcao(opcao, num1, num2, num3)
    if (valorEscolhido !== undefined) {
        console.log(`O valor escolhido é ${valorEscolhido}`)
    }
}

function verificar_opcao(opcao, num1, num2, num3) {
    if (opcao === 1) {
        return num1
    } else if (opcao === 2) {
        return num2
    } else if (opcao === 3) {
        return num3
    } else {
        console.log('Opção inválida, escolha entre 1, 2 ou 3')
    }
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()
