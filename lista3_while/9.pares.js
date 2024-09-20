// Leia LimiteSuperior e LimiteInferior e escreva todos os números pares entre os limites lidos.
import { get_number, print } from '../utils/io_utils.js'

function main() {
    let limite_superior = get_number('Limite Superior: ')
    let limite_inferior = get_number('Limite Inferior: ')

    let i = limite_inferior

    while (i <= limite_superior) {
        if (i % 2 === 0){
            print(i)
        }
        i++
    }
}

main()
