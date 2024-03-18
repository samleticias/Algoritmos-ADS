// Leia 2 números inteiros e escreva a multiplicação dos mesmos, sem que o operador de multiplicação (*)
//seja utilizado.
import { get_number, print } from '../utils/io_utils.js'

function main(){
    const n1 = get_number('Digite um número: ')
    const n2 = get_number('Digite outro número: ')
    let resultado = 0
    let contador = 0

    while (contador < n1) {
        resultado += n2
        contador++
    }

    print(`Resultado da multiplicação: ${resultado}`)
}

main()