// Imprimir uma Sequência Fibonacci de comprimento C.
import {get_number, print} from '../../utils/io_utils.js'
import {meu_push, meu_join} from '../../utils/my_collection_utils.js'

function main(){
    let comprimento = get_number('Comprimento: ')

    let sequencia_fibonacci = obter_sequencia_fibonacci(comprimento)

    print(`\nLista Fibonacci: ${sequencia_fibonacci}\n`)

    if (comprimento >= 2){
        print(`\nOs ${comprimento} primeiros termos da sequência de Fibonacci são:\n`)
        print(meu_join(sequencia_fibonacci, ', ') + '\n')
    } else {
        print('\nValor inválido! O comprimento deve ser maior ou igual a 2\n')
    }
}

// Os 4 Elementos do While
// 1. Estado anterior
// 2. Condição de parada 
// 3. Trabalho
// 4. Convergencia de dados

function obter_sequencia_fibonacci(comprimento){
    let sequencia_fibonacci = [0, 1]
    let iteracao = 2
    while (iteracao < comprimento){
        let proximo_termo = sequencia_fibonacci[iteracao - 1] + sequencia_fibonacci[iteracao - 2]
        meu_push(sequencia_fibonacci, proximo_termo)
        iteracao++
    }
    return sequencia_fibonacci
}

main()