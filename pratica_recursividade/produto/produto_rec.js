// Calcular o Produto (multiplicação) nas forma de somas sucessivas.
import { get_number, print} from '../../utils/io_utils.js'

function main(){
    let primeiro_numero = get_number('\nDigite o primeiro número: ')
    let segundo_numero = get_number('\nDigite o segundo número: ')

    let resultado = multiplicar(primeiro_numero, segundo_numero)

    print(`\nResultado da Multiplicação: ${primeiro_numero} x ${segundo_numero} = ${resultado}\n`)
}

function multiplicar(primeiro_numero, segundo_numero){
    if (primeiro_numero === 0 || segundo_numero === 0){
        return 0
    }
    return primeiro_numero + multiplicar(primeiro_numero, segundo_numero - 1)
}

main()