// Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).
import {get_number, print} from '../utils/io_utils.js'

function main(){
    let N = get_number('Digite a quantidade de termos: ')
    let termos = obter_termos_sequencia(N)
    print(`Os ${N} primeiros termos da sequência são: `)
    mostrar_termos_sequencia(termos)

}

function obter_termos_sequencia(N){
    let termos_sequencia = []
    for (let i = 1; i <= N; i++) {
        termos_sequencia.push(i)
    }
    return termos_sequencia
}

function mostrar_termos_sequencia(termos){
    for (let i = 0; i < termos.length; i++) {
        print(termos[i] + " ")
    }
}

main()