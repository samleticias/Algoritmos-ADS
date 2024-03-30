// Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.
import { get_number, print } from '../utils/io_utils.js'

function main() {
    let limite_superior = get_number('Limite Superior: ')
    let limite_inferior = get_number('Limite Inferior: ')

    let number = limite_inferior

    while (number <= limite_superior) {
        let divisor = 2
        let isPrime = true
        
        if (number <= 1) {
            number++
            continue
        }

        while (divisor <= Math.sqrt(number)) {
            if (number % divisor === 0 && number !== divisor) {
                isPrime = false
                break
            }
            divisor++
        }

        if (isPrime) print(number)

        number++
    }
}

main()

