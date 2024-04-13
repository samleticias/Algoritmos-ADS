import {get_number, print} from '../utils/io_utils.js'
// 11. Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.

function main(){
    let limite_inferior = get_number('Limite Inferior: ')
    let limite_superior = get_number('Limite Superior: ')

    obter_primos(limite_inferior, limite_superior)
}

function obter_primos(limite_inferior, limite_superior) {
    for (let num = limite_inferior; num <= limite_superior; num++) {
        if (num < 2) {
            continue
        }
        
        let isPrime = true

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false
                break
            }
        }

        if (isPrime) {
            print(num)
        }

    }
}

main()