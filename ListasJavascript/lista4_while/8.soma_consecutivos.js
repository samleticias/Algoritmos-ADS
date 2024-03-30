// Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo
// quando a soma de dois números consecutivos da lista for igual a X.
import { get_number, print } from '../utils/io_utils.js'

function obter_soma_numeros(x) {
    let n1 = get_number('Digite um número da lista: ')
    let n2 = get_number('Digite um número da lista: ')
    
    while (n1 + n2 !== x) { // 2. Expressão de continuidade
        n1 = n2
        n2 = get_number('Digite um número da lista: ')
    }
    
    return n1 + n2
}

function main() {
    // 1. Estado anterior
    const x = get_number('Digite um número: ')
    const soma = obter_soma_numeros(x) // 3. Trabalho
    print(`A soma ${soma} é igual ao número X`) // 4. Convergenc. de dados
}

main()
