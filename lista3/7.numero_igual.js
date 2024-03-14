// Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.
import { get_number, print } from '../utils/io_utils.js'

function main(){
    const n = get_number('Digite um número: ')

    const numero_igual = obter_numero_igual(n)
    print(`O número ${numero_igual} é igual ao primeiro número lido`)
}

function obter_numero_igual(n){
    let numero = get_number('Digite um número da lista: ')
    while (numero !== n) {
        numero = get_number('Digite um número da lista: ')
    }
    return numero
}

main()