// Calcular o Produto (multiplicação) nas forma de somas sucessivas.
import { get_number, print} from '../../utils/io_utils.js'

function main(){
    let primeiro_numero = get_number('\nDigite o primeiro número: ')
    let segundo_numero = get_number('\nDigite o segundo número: ')

    let resultado = multiplicar(primeiro_numero, segundo_numero)

    print(`\nResultado da Multiplicação: ${primeiro_numero} x ${segundo_numero} = ${resultado}\n`)
}

function multiplicar(primeiro_numero, segundo_numero){
    let multiplicacao = 0
    let contador = 0

    while (contador < segundo_numero){
        multiplicacao = multiplicacao + primeiro_numero
        contador++
    }
    return multiplicacao
}

main()