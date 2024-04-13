import {get_number, print} from '../utils/io_utils.js'
// Leia N, calcule e escreva o valor de S.

function main() {
    let N = get_number('Digite N: ')

    if (N >= 1) {
        let S = calcular_valor_S(N)
        print(`O valor de S é: ${S.toFixed(2)}`)
    } else {
        print('Valor inválido! O valor de N deve ser maior ou igual a 1')
    }
}

function calcular_valor_S(N) {
    let S = 0
    for (let i = 1; i <= N; i++) {
        S += 1 / (N - i + 1)
    }
    return S
}

main()

