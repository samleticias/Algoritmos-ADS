import {get_number, print} from '../utils/io_utils.js'
//  10. Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos.

function main(){
    let limite_inferior = get_number('Limite Inferior: ')
    let limite_superior = get_number('Limite Superior: ')

    obter_impares(limite_inferior, limite_superior)
}

function obter_impares(limite_inferior, limite_superior){
    for (let i = limite_inferior; i <= limite_superior; i++) {
        if (i % 2 !== 0){
            print(i)
        }
    }
}

main()

