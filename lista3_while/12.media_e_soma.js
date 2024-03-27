// Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.
import { get_number, print } from '../utils/io_utils.js'

function main() {
    let N = get_number('Digite N: ')
    let contador = 0
    let soma_numeros = 0

    while (contador < N) {
        let numero = get_number(`Digite o número ${contador + 1}: `)
        soma_numeros += numero
        contador++
    }

    let media_numeros = soma_numeros / N
    print(`Soma = ${soma_numeros}`)
    print(`Média = ${media_numeros.toFixed(2)} `)
}

main()
