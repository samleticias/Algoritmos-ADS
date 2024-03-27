// Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.
import { get_number, print } from '../utils/io_utils.js'

function main() {
    let N = get_number('Digite N: ')
    let limite_superior = get_number('Limite Superior: ')
    let limite_inferior = get_number('Limite Inferior: ')

    let i = Math.ceil(limite_inferior / N) * N

    while (i <= limite_superior) {
        print(i)
        i += N
    }
}

main()
