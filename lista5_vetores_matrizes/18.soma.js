// Leia uma matriz quadrada de ordem N, calcule e escreva a soma dos números positivos e a soma dos
// números negativos.
import { question } from 'readline-sync'

function calcularSomasPositivosENegativos(matriz) {
    let ordem = matriz.length
    let somaPositivos = 0
    let somaNegativos = 0
    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
            if (matriz[i][j] > 0) {
                somaPositivos += matriz[i][j]
            } else if (matriz[i][j] < 0) {
                somaNegativos += matriz[i][j]
            }
        }
    }
    return { somaPositivos, somaNegativos }
}

function main() {
    let ordem = Number(question("Ordem da matriz quadrada (N): "))
    let matriz = []
    for (let i = 0; i < ordem; i++) {
        matriz[i] = []
        for (let j = 0; j < ordem; j++) {
            matriz[i][j] = Number(question(`Elemento [${i + 1}, ${j + 1}]: `))
        }
    }
    let { somaPositivos, somaNegativos } = calcularSomasPositivosENegativos(matriz)
    console.log(`Soma dos números positivos: ${somaPositivos}`)
    console.log(`Soma dos números negativos: ${somaNegativos}`)
}

main()
