// Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.
import { get_number, print } from '../utils/io_utils.js'

function main(){
    let N = get_number('Digite um número: ')
    let contador = 0
    let soma = 0

    while (contador < N){
        contador++
        soma += contador
    }

    print(`Soma de 1 a ${N} = ${soma}`)
}

main()