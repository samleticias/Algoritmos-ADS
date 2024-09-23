// Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.
import { get_number, print } from '../utils/io_utils.js'

function main(){
    // 1. Estado anterior
    const n = get_number('Digite um número: ')

    const numero_igual = obter_numero_igual(n) // 3. Trabalho
    print(`O número ${numero_igual} é igual ao primeiro número lido`) // 4. Convergenc. de dados
}

function obter_numero_igual(n){
    let numero = get_number('Digite um número da lista: ')
    while (numero !== n) { // 2. Expressão de continuidade
        numero = get_number('Digite um número da lista: ')
    }
    return numero
}

main()