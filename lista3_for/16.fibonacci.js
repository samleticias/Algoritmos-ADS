import {get_number, print} from '../utils/io_utils.js'
// 16. Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci
// (0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2.

function main() {
    let N = get_number('Digite N: ')

    if (N >= 2) {
        let fibonacci = calcular_fibonacci(N)
        print(`Os ${N} primeiros termos da sequência de Fibonacci são:`)
        print(fibonacci.join(', '))
    } else {
        print('Valor inválido! O valor de N deve ser maior ou igual a 2')
    }
}

function calcular_fibonacci(N) {
    let fibonacci = [0, 1]

    for (let i = 2; i < N; i++) {
        let proximo_termo = fibonacci[i - 1] + fibonacci[i - 2]
        fibonacci.push(proximo_termo)
    }

    return fibonacci
}

main()