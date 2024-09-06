// Imprimir uma Sequência Fibonacci de comprimento C.
import {get_number, print} from '../../utils/io_utils.js'

function main(){
    let comprimento = get_number('Comprimento: ')

    let sequencia_fibonacci = obter_sequencia_fibonacci(comprimento)

    print(`\nLista Fibonacci : ${sequencia_fibonacci}\n`)

    if (comprimento >= 2) {
        print(`\nOs ${comprimento} primeiros termos da sequência de Fibonacci são:\n`)
        print(sequencia_fibonacci.join(', ') + '\n')
    } else {
        print('\nValor inválido! O comprimento deve ser maior ou igual a 2\n')
    }
}

// Função Recursiva
// 1. Caso base ou caso inicial
// 2. Convergencia de dados
// 3. Trabalho
// 4. Função chamar a si mesma
function obter_sequencia_fibonacci(comprimento) {
    if (comprimento <= 0) {
        return []
    }
    if (comprimento === 1) {
        return [0]
    }
    if (comprimento === 2) {
        return [0, 1]
    }

    function gerar_fibonacci(n) {
        if (n === 1) {
            return [0]
        }
        if (n === 2) {
            return [0, 1]
        }

        let sequencia_fibonacci = gerar_fibonacci(n - 1)
        let proximo_termo = sequencia_fibonacci[n - 2] + sequencia_fibonacci[n - 3]
        meu_push(sequencia_fibonacci, proximo_termo)
        return sequencia_fibonacci
    }
    return gerar_fibonacci(comprimento)
}


function meu_push(lista, elemento){
    lista.push(elemento)
    return lista
}

main()