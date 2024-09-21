// Escreva a seguinte matriz:
// 19.

// 1 1 1 1 1 1
// 1 2 2 2 2 1
// 1 2 3 3 2 1
// 1 2 3 3 2 1
// 1 2 2 2 2 1
// 1 1 1 1 1 1
import { question } from 'readline-sync'
function main() {
    let matriz = [
        [1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 1],
        [1, 2, 3, 3, 2, 1],
        [1, 2, 3, 3, 2, 1],
        [1, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1]
    ]

    for (let i = 0; i < matriz.length; i++) {
        let linha = ""
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j] + " "
        }
        console.log(linha)
    }
}

main()
