// Escreva a tabuada dos números de 1 a 10.
import { get_number, print } from '../utils/io_utils.js'

function main(){
    let numero = get_number('Digite um número: ')
    let contador = 0

    while (contador < 10){
        contador++
        print(`${numero} x ${contador} = ${numero * contador}`)
    }

}

main()