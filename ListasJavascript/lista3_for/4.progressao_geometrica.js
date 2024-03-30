// Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
// Geométrica que tem por valor inicial A0 e razão R.
import {get_number, print} from '../utils/io_utils.js'

function main(){
    let A0 = get_number("Digite o valor inicial (A0): ")
    let Limite = get_number("Digite o limite: ")
    let R = get_number("Digite a razão (R): ")

    let valor = A0

    for (let i = valor; i <= Limite; i++) {
        print(valor)
        valor *= R
    }
}

main()