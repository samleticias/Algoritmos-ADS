/*
Escreva um algoritmo que leia a razão de uma PG (Progressão Geométrica) e o seu primeiro termo e
escreva os N termos da PG. Ler o valor de N.
*/
import { get_number, print } from '../utils/io_utils.js'

function main(){
    const razao = get_number('Razão PG: ')
    let primeiro_termo = get_number('Primeiro termo PG: ')
    let n = get_number('Quantidade de termos a serem gerados: ')
    let contador = 0

    print('***** PROGRESSÃO GEOMÉTRICA *****')
    print('---------------------------------')

    while (contador < n) {
        print(`Termo ${contador + 1}: ${primeiro_termo}`)
        primeiro_termo *= razao
        contador++
    }
}

main()