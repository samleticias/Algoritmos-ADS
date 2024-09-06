// Imprimir uma Sequência Fibonacci de comprimento C.
import {get_number, print} from '../../utils/io_utils.js'
import {meu_push, meu_join} from '../../utils/my_collection_utils.js'

function main() {
    let comprimento = get_number('Comprimento: ')

    let sequencia_fibonacci = obter_sequencia_fibonacci(comprimento)

    print(`\nLista Fibonacci : ${sequencia_fibonacci}\n`)

    if (comprimento >= 2) {
        print(`\nOs ${comprimento} primeiros termos da sequência de Fibonacci são:\n`)
        print(meu_join(sequencia_fibonacci, ', ') + '\n')
    } else {
        print('\nValor inválido! O comprimento deve ser maior ou igual a 2\n')
    }
}

function obter_sequencia_fibonacci(comprimento) {
    let sequencia_fibonacci = [0, 1]
    for (let i = 2; i < comprimento; i++) {
        let proximo_termo = sequencia_fibonacci[i - 1] + sequencia_fibonacci[i - 2]
        meu_push(sequencia_fibonacci, proximo_termo)
    }
    return sequencia_fibonacci
}

main()