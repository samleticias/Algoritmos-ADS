// 1. Leia N e escreva todos os números inteiros de 1 a N.
import {get_number, print} from '../utils/io_utils.js'

function main(){
    let N = get_number('Digite o valor de N: ')
    escrever_numeros(N)
}

function escrever_numeros(N){
    for (let i = 1; i <= N; i++) {
        print(i)
    }
}

main()