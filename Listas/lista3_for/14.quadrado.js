import {get_number, print} from '../utils/io_utils.js'
// 14. Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o
// maior quadrado menor que 38 é 36 (quadrado de 6).

function main() {
    let N = get_number('Digite N: ')
    let maior_quadrado = obter_maior_quadrado(N)

    print(`O maior quadrado menor ou igual a ${N} é ${maior_quadrado}`)
}

function obter_maior_quadrado(N) {
    let raiz_quadrada_n = Math.floor(Math.sqrt(N))
    return raiz_quadrada_n * raiz_quadrada_n
}

main()