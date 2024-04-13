import {get_number, print} from '../utils/io_utils.js'
// 12. Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.

function main() {
    let N = get_number('Digite N: ')
    let lista_numeros = []

    for (let ordem = 1; ordem <= N; ordem++) {
        let numero = get_number(`Digite o ${ordem} número da lista: `)
        lista_numeros.push(numero)
    }

    let soma_numeros = obter_soma_numeros(lista_numeros)
    let media_numeros = soma_numeros / N

    print('>>>>>> NÚMEROS <<<<<<<')
    print('-----------------------')
    print(`Soma = ${soma_numeros.toFixed(2)}`)
    print(`Média = ${media_numeros.toFixed(2)}`)
    print('-----------------------')
}

function obter_soma_numeros(lista_numeros) {
    let soma = 0
    for (let numero of lista_numeros) {
        soma += numero
    }
    return soma
}

main()
