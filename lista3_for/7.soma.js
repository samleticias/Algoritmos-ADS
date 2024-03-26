// Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.
import {get_number, print} from '../utils/io_utils.js'

function main(){
    let N = get_number('Digite um número: ')
    let soma = obter_soma_inteiros(N)
    print(`Soma inteiros de 1 a ${N}: ${soma}`)
}

function obter_soma_inteiros(N){
    let soma_inteiros = 0
    for (let i = 1; i <= N; i++) {
        soma_inteiros += i
    }
    return soma_inteiros
}

main()