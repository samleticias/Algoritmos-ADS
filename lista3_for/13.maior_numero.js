import {get_number, print} from '../utils/io_utils.js'
// 13. Leia N e uma lista de N números e escreva o maior número da lista.

function main(){
    let N = get_number('Digite N: ')
    let lista_numeros = []

    for (let ordem = 1; ordem <= N; ordem++) {
        let numero = get_number(`Digite o ${ordem} número da lista: `)
        lista_numeros.push(numero)
    }

    let maior_numero = obter_maior_numero(lista_numeros)
    let soma_numeros = obter_soma_numeros(lista_numeros)

    print('>>>>>> NÚMEROS <<<<<<<')
    print('-----------------------')
    print(`Soma = ${soma_numeros.toFixed(2)}`)
    print(`Maior = ${maior_numero}`)
    print('-----------------------')
}

function obter_soma_numeros(lista_numeros) {
    let soma = 0
    for (let numero of lista_numeros) {
        soma += numero
    }
    return soma
}

function obter_maior_numero(lista_numeros) {
    let maior = -Infinity
    for (let numero of lista_numeros) {
        if (numero > maior) {
            maior = numero
        }
    }
    return maior
}

main()