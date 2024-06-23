// Leia uma matriz quadrada de ordem N, calcule e escreva seu determinante.
import { question } from 'readline-sync'

function calcularDeterminante(matriz) {
    let n = matriz.length
    let det = 1

    let mat = matriz.map(arr => arr.slice())

    for (let i = 0; i < n; i++) {
        let maxEl = Math.abs(mat[i][i])
        let maxRow = i
        for (let k = i + 1; k < n; k++) {
            if (Math.abs(mat[k][i]) > maxEl) {
                maxEl = Math.abs(mat[k][i])
                maxRow = k
            }
        }

        for (let k = i; k < n; k++) {
            let tmp = mat[maxRow][k]
            mat[maxRow][k] = mat[i][k]
            mat[i][k] = tmp
        }

        if (mat[i][i] === 0) {
            return 0
        }

        for (let k = i + 1; k < n; k++) {
            let c = -mat[k][i] / mat[i][i]
            for (let j = i; j < n; j++) {
                if (i === j) {
                    mat[k][j] = 0
                } else {
                    mat[k][j] += c * mat[i][j]
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        det *= mat[i][i]
    }

    return det
}

function main() {
    let ordem = Number(question("Ordem da matriz (N): "))

    let matriz = []
    for (let i = 0; i < ordem; i++) {
        matriz[i] = []
        for (let j = 0; j < ordem; j++) {
            matriz[i][j] = Number(question(`Elemento [${i + 1}, ${j + 1}]: `))
        }
    }

    let determinante = calcularDeterminante(matriz)

    console.log(`Determinante da matriz: ${determinante}`)
}

main()
