// Leia uma matriz quadrada de ordem N, calcule e escreva sua matriz transposta.
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
    let transposta = []
    for (let i = 0; i < ordem; i++) {
        transposta[i] = []
        for (let j = 0; j < ordem; j++) {
            transposta[i][j] = matriz[j][i]
        }
    }
    console.log(">>>> Matriz Transposta <<<<")
    for (let i = 0; i < ordem; i++) {
        console.log(transposta[i].join(' '))
    }
}

main()
