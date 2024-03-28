// Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci
//(0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2.
import { get_number, print } from '../utils/io_utils.js'

function main(){
    let N = get_number('Digite N: ')
    if (N >= 2) {
        let contador = 2
        let termo_anterior = 0
        let termo_atual = 1
        
        print(termo_anterior)
        print(termo_atual)

        while (contador < N) {
            let proximo_termo = termo_anterior + termo_atual
            print(proximo_termo)
            termo_anterior = termo_atual
            termo_atual = proximo_termo
            contador++
        }
    } else {
        print('Valor para N deve ser maior ou igual a 2!')
    }
}

main()