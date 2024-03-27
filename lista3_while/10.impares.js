// Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos.
import { get_number, print } from '../utils/io_utils.js'

function main() {
    let limite_superior = get_number('Limite Superior: ')
    let limite_inferior = get_number('Limite Inferior: ')

    let i = limite_inferior

    if (i % 2 === 0) { 
        i++
    }

    while (i <= limite_superior) {
        print(i)
        i += 2
    }
}

main()