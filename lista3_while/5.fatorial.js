// Leia um número, calcule e escreva seu fatorial.
import { get_number, print } from '../utils/io_utils.js'

function main() {
    let numero = get_number('Digite um número: ')
    let fatorial = 1
    let i = 1

    if (numero === 0) {
        print("O fatorial de 0 é 1")
    } else {
        while (i <= numero) {
            fatorial *= i
            i++
        }
        print(`O fatorial de ${numero} é ${fatorial}`)
    }
}

main()
