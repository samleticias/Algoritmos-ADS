import { get_number, print } from '../utils/io_utils.js'

function main(){
    const n1 = get_number('Digite um número: ')
    const n2 = get_number('Digite um número: ')

    const mdc = calcular_mdc(n1, n2)
    
    print(`O MDC entre os números ${n1} e ${n2} é ${mdc}`)
}

main()

function calcular_mdc(n1, n2) {
    while (n2 !== 0) {
        let temp = n2
        n2 = n1 % n2
        n1 = temp
    }
    return n1
}