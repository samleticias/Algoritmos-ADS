// Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o
// maior quadrado menor que 38 é 36 (quadrado de 6).
import { get_number, print } from '../utils/io_utils.js'

function main() {
    let N = get_number('Digite N: ')
    let contador = 0
    let quadrado_maior_menor = 0

    while (contador * contador <= N) {
        quadrado_maior_menor = contador * contador
        contador++
    }

    print(`O maior quadrado menor ou igual a ${N} é: ${quadrado_maior_menor}`)
}

main()
