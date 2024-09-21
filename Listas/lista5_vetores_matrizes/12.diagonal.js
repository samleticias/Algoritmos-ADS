// Leia uma matriz quadrada de ordem N, calcule e escreva a soma dos elementos da diagonal principal,
// a soma dos elementos da diagonal secundária e a soma dos elementos que não estão na diagonal
// principal nem na diagonal secundária
import { question } from 'readline-sync'

function main() {
    let ordem = Number(question("Ordem da matriz (N): "))
    let matriz = []
    for (let i = 0; i < ordem; i++) {
        matriz[i] = []
        for (let j = 0; j < ordem; j++) {
            matriz[i][j] = Number(question(`Elemento [${i + 1}, ${j + 1}]: `))
        }
    }
    let somaDiagonalPrincipal = 0
    let somaDiagonalSecundaria = 0
    let somaNaoDiagonais = 0
    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
            if (i === j) {
                somaDiagonalPrincipal += matriz[i][j]
            } else if (i + j === ordem - 1) {
                somaDiagonalSecundaria += matriz[i][j]
            } else {
                somaNaoDiagonais += matriz[i][j]
            }
        }
    }
    console.log(`Soma da diagonal principal: ${somaDiagonalPrincipal}`)
    console.log(`Soma da diagonal secundária: ${somaDiagonalSecundaria}`)
    console.log(`Soma dos elementos que não estão nas diagonais: ${somaNaoDiagonais}`)
}

main()
