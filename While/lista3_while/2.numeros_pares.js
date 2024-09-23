// Leia N e escreva todos os números inteiros pares de 1 a N.
import {get_number, print} from '../utils/io_utils.js'

function main(){
    let N = get_number('Digite N: ')
    let contador = 0

    while (contador < N){
        contador++
        if (contador % 2 === 0 ){
        print(contador)
        }

    }
}

main()
