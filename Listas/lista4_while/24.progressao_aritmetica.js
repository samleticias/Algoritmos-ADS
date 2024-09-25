// Escreva um algoritmo que leia a razão de uma PA (Progressão Aritmética) e o seu primeiro termo e
//escreva os N termos da PA. Ler o valor de N.
import { get_number, print } from '../utils/io_utils.js'

function main(){
    const razao = get_number('Razão PG: ')
    let primeiro_termo = get_number('Primeiro termo PA: ')
    let n = get_number('Quantidade de termos a serem gerados: ')
    let contador = 0

    print('***** PROGRESSÃO ARITMÉTICA *****')
    print('---------------------------------')

    while (contador < n) {
        print(`Termo ${contador + 1}: ${primeiro_termo}`)
        primeiro_termo +=  razao 
        contador++
    }
}

main()