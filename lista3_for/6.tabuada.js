// Escreva a tabuada dos números de 1 a 10.
import {get_number, print} from '../utils/io_utils.js'

function main(){
    const numero = get_number('Número: ')
    obter_tabuada(numero)

}

function obter_tabuada(numero){
    if (numero > 0 && numero <= 10){
        for (let i = 1; i <= 10; i++) {
            print(`${numero} x ${i} = ${numero * i}`)
        }
    }
}

main()