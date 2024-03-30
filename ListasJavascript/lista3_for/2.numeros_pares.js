// Leia N e escreva todos os números inteiros pares de 1 a N.
import {get_number, print} from '../utils/io_utils.js'

function main(){
    let N = get_number('Digite N: ')
    escrever_numeros_pares(N)

}

function escrever_numeros_pares(N){
    for (let i = 1; i <= N; i++) {
        if (i % 2 === 0){
        print(i)
        }
    }
}

main()