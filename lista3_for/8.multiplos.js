import {get_number, print} from '../utils/io_utils.js'
// 8. Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.

function main(){
    let N = get_number('Digite N: ')
    let limite_inferior = get_number('Limite Inferior: ')
    let limite_superior = get_number('Limite Superior: ')

    obter_multiplos(N, limite_inferior, limite_superior)

}

function obter_multiplos(N, limite_inferior, limite_superior){
    for (let i = limite_inferior; i <= limite_superior; i++) {
        if (i % N === 0){
            print(i)
        }
    }
}

main()