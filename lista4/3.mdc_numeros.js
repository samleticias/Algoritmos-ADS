// Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum) entre os números lidos.
import { get_number, print } from '../utils/io_utils.js'

function main(){
    const n1 = get_number('Digite o primeiro número: ')
    const n2 = get_number('Digite o segundo número: ')

    const mdc = calcular_mdc(n1, n2)
    print(`O MDC de ${n1} e ${n2} é: ${mdc}`)
}

function calcular_mdc(n1, n2) {
    while (n2 !== 0) {
        let temp = n2
        n2 = n1 % n2
        n1 = temp
    }
    return n1
}

main()
