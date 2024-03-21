/*
Leia 2 números inteiros e escreva o quociente e o resto da divisão dos mesmos, sem que os operadores
de divisão (/ e %) sejam utilizados.
*/
import { get_number, print } from '../utils/io_utils.js'

function main(){
    const n1 = get_number('Digite um número: ')
    const n2 = get_number('Digite um número: ')
    
    let quociente = 0
    let resto = n1 

    while (resto >= n2) {
        resto -= n2
        quociente++
    }

    print(`Quociente da divisão: ${quociente}`)
    print(`Resto da divisão: ${resto}`)
}

main()