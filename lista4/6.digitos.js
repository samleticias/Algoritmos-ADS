// Escreva um algoritmo para determinar o número de dígitos de um número informado.
import { get_number, print } from '../utils/io_utils.js'

function main(){
    const n = get_number('Digite um número: ')

    const qtd_digitos = obter_qtd_digitos(n)
    print(`O número ${n} tem ${qtd_digitos} dígitos`)
}

function obter_qtd_digitos(n){
    return n.toString().length
}

main()