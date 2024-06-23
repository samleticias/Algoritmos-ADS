// Leia uma matriz quadrada de ordem N e escreva se ela é ou não simétrica. Uma matriz quadrada é dita
// simétrica se A[i,j] =A[j,i].
import { question } from 'readline-sync'

function verificarMatrizSimetrica(matriz) {
    let ordem = matriz.length

    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
            if (matriz[i][j] !== matriz[j][i]) {
                return false
            }
        }
    }
    return true
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
    let ehSimetrica = verificarMatrizSimetrica(matriz)
    if (ehSimetrica) {
        console.log("A matriz é simétrica")
    } else {
        console.log("A matriz não é simétrica")
    }
}

main()
