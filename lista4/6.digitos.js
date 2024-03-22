// Escreva um algoritmo para determinar o número de dígitos de um número informado.
import { get_number_min, print } from '../utils/io_utils.js'

function main(){
    // 1. Estado anterior
    let numero = get_number_min('Número: ', 0)

    while (numero !== 0){ // 2. Expressão de continudiade

    const qtd_digitos = obter_qtd_digitos(numero) // 3. Trabalho
    print(`O número ${numero} tem ${qtd_digitos} dígitos`)

    numero = get_number_min('Número: ', 0) // 4. Convergenc. de dados

    }

    print('Fim..')
}

function obter_qtd_digitos(numero){
    return numero.toString().length
}

main()
