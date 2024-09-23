// 20.

// 01 02 03 04 05
// 06 07 08 09 10
// 11 12 13 14 15
// 16 17 18 19 20
// 21 22 23 24 25
import { question } from 'readline-sync'

function main() {
    let numero = 1
    let matriz = []
    let tamanho = 5

    for (let i = 0; i < tamanho; i++) {
        matriz[i] = []
        for (let j = 0; j < tamanho; j++) {
            matriz[i][j] = numero.toString().padStart(2, '0')
            numero++
        }
    }
    for (let i = 0; i < tamanho; i++) {
        let linha = ""
        for (let j = 0; j < tamanho; j++) {
            linha += matriz[i][j] + " "
        }
        console.log(linha)
    }
}

main()
