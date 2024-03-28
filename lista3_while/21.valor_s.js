import { get_number, print } from '../utils/io_utils.js'

function main() {
    let N = get_number('Digite N: ')
    let numerador = 1
    let denominador = 1
    let fracao = 0
    let S = 0

    while (N > 0) {
        fracao = numerador / denominador
        S += fracao
        print(fracao)
        numerador += 2
        denominador++
        N--
    }

    print(`Soma das frações: ${S.toFixed(2)}`)
}

main()
