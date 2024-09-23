// Leia um número, calcule e escreva seu fatorial.
import {get_number, print} from '../utils/io_utils.js'

function main(){
    const numero = get_number('Digite um número: ')
    let resultado = obter_fatorial(numero)
    print(`Fatorial de ${numero}: ${resultado}`)

}

function obter_fatorial(numero){
    let fatorial = 1
    for (let i = 1; i <= numero; i++) {
        fatorial *= i
    }
    return fatorial
}

main()