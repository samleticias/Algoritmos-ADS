import { get_number, print } from '../utils/io_utils.js'

function main() {
    let N = get_number('Digite N: ')
    let numerador = 1
    let denominador = 1
    let contador = 0
    let fracao = 0
    let S = 0

    while (contador < N) {
        fracao = numerador / denominador
        print(fracao)
        S += fracao
        denominador++
        contador++
    }

    print(`Soma das frações: ${S.toFixed(2)}`)
}

main()
