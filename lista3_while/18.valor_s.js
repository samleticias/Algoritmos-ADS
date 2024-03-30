import { get_number, print } from '../utils/io_utils.js'

function main() {
    let N = get_number('Digite N: ')
    let numerador = 1
    let denominador = N
    let fracao = 0
    let S = 0

    while (denominador >= 1) {
        fracao = numerador / denominador
        print(fracao)
        S += fracao
        denominador--
    }

    print(`Soma das frações: ${S.toFixed(2)}`)
}

main()
