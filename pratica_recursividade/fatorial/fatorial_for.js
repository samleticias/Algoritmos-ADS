// Calcular o Fatorial de um número N.
import {get_number, print} from '../../utils/io_utils.js'

function main(){
    let numero = get_number('Digite um número: ')
    let fatorial = obter_fatorial(numero)
    print(`\nFatorial de ${numero} = ${fatorial}\n`)
}

function obter_fatorial(numero){
    let fatorial = 1

    if (numero < 0){
        print('Não é possível obter fatorial de valores negativos!')
        return null
    }
    for (let i = 1; i <= numero; i++) {
        fatorial *= i
        print(`Número atual: ${i}`)
    }
    return fatorial
}

main()