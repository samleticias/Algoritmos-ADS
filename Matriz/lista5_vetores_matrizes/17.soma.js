// Leia uma matriz quadrada de ordem N e encontre a linha que possui a maior e a menor soma dos
// elementos.
import { question } from 'readline-sync'

function encontrarLinhasMaxMinSoma(matriz) {
    let ordem = matriz.length
    let somaMax = -Infinity
    let somaMin = Infinity
    let linhaMax = -1
    let linhaMin = -1
    for (let i = 0; i < ordem; i++) {
        let somaLinha = 0
        for (let j = 0; j < ordem; j++) {
            somaLinha += matriz[i][j]
        }
        if (somaLinha > somaMax) {
            somaMax = somaLinha
            linhaMax = i
        }
        if (somaLinha < somaMin) {
            somaMin = somaLinha
            linhaMin = i
        }
    }
    return { linhaMax, linhaMin, somaMax, somaMin }
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
    let { linhaMax, linhaMin, somaMax, somaMin } = encontrarLinhasMaxMinSoma(matriz)
    console.log(`Linha com maior soma: ${linhaMax + 1} (Soma: ${somaMax})`)
    console.log(`Linha com menor soma: ${linhaMin + 1} (Soma: ${somaMin})`)
}

main()
