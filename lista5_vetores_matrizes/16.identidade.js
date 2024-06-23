// Escreva a matriz identidade de ordem N.
import { question } from 'readline-sync'

function criarMatrizIdentidade(ordem) {
    let matrizIdentidade = []
    for (let i = 0; i < ordem; i++) {
        matrizIdentidade[i] = []
        for (let j = 0; j < ordem; j++) {
            if (i === j) {
                matrizIdentidade[i][j] = 1
            } else {
                matrizIdentidade[i][j] = 0
            }
        }
    }

    return matrizIdentidade
}

function main() {
    let ordem = Number(question("Ordem da matriz identidade (N): "))
    let matrizIdentidade = criarMatrizIdentidade(ordem)
    console.log(`Matriz Identidade de ordem ${ordem}:`)
    for (let i = 0; i < ordem; i++) {
        console.log(matrizIdentidade[i].join(" "))
    }
}

main()
