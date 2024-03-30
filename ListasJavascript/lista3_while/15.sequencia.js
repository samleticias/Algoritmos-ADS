// Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).
import { get_number, print } from '../utils/io_utils.js'

function main(){
    let N = get_number('Digite N: ')
    let contador = 0
    let termo = 1

    while (contador < N){
        termo += contador
        print(termo)
        contador++
    }

}

main()