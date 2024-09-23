// Leia uma matriz quadrada de ordem N, determine e escreva o maior e o menor elemento da matriz e
// suas respectivas posições (linha, coluna).
import { question } from 'readline-sync'

function main() {
    let maior_elemento = -Infinity
    let menor_elemento = Infinity
    let posicao_maior = { linha: -1, coluna: -1 }
    let posicao_menor = { linha: -1, coluna: -1 }

    let ordem = Number(question("Ordem da matriz (N): "))
    let matriz = []

    for (let i = 0; i < ordem; i++) {
        matriz[i] = []
        for (let j = 0; j < ordem; j++) {
            matriz[i][j] = Number(question(`Elemento [${i + 1}, ${j + 1}]: `))
        }
    }

    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
            if (matriz[i][j] > maior_elemento) {
                maior_elemento = matriz[i][j]
                posicao_maior.linha = i + 1
                posicao_maior.coluna = j + 1
            }
            if (matriz[i][j] < menor_elemento) {
                menor_elemento = matriz[i][j]
                posicao_menor.linha = i + 1
                posicao_menor.coluna = j + 1
            }
        }
    }
    console.log(`Maior elemento = ${maior_elemento} (Posição: [${posicao_maior.linha}, ${posicao_maior.coluna}])`)
    console.log(`Menor elemento = ${menor_elemento} (Posição: [${posicao_menor.linha}, ${posicao_menor.coluna}])`)
}

main()
