import {get_number, print} from '../utils/io_utils.js'
// 9. Leia LimiteSuperior e LimiteInferior e escreva todos os números pares entre os limites lidos.

function main(){
    let limite_inferior = get_number('Limite Inferior: ')
    let limite_superior = get_number('Limite Superior: ')

    obter_pares(limite_inferior, limite_superior)
}

function obter_pares(limite_inferior, limite_superior){
    for (let i = limite_inferior; i <= limite_superior; i++) {
        if (i % 2 === 0){
            print(i)
        }
    }
}

main()