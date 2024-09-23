// Leia N e uma lista de N números e escreva o maior número da lista.
import { get_number, print } from '../utils/io_utils.js'

function main(){
    let N = get_number('Digite N: ')
    let contador = 0
    let numero = 0
    let maior = 0

    while (contador < N) {
        numero = get_number(`Digite o número ${contador + 1}: `)
        if (numero > maior) {
            maior = numero 
        }
        contador++
    }
    print(`Maior número: ${maior}`)
}

main()