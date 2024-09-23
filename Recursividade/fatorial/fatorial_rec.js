// Calcular o Fatorial de um número N.
import {get_number, print} from '../../utils/io_utils.js'

function main(){
    let numero = get_number('Digite um número: ')
    let fatorial = obter_fatorial(numero)
    print(`\nFatorial de ${numero} = ${fatorial}\n`)
}

function obter_fatorial(numero){
    if (numero == 0 || numero == 1){
        return 1
    }
    return numero * obter_fatorial(numero - 1)
}


main()