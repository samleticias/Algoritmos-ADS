// Leia um vetor A com 20 elementos, calcule e escreva o valor de S.
// S = (A[1] - A[20])2 + (A[2] - A[19])2 + ... + (A[9] - A[12])2 + (A[10] - A[11])2
import { question } from 'readline-sync'

function main(){
    const qtd_elementos = 20
    let vetorA = []
    for (let i = 0; i < qtd_elementos; i++){
        let elemento = Number(question(`Elemento ${i + 1}: `))
        vetorA.push(elemento)
    }

    let S = 0
    for (let i = 0; i < qtd_elementos / 2; i++) {
        S += Math.pow((vetorA[i] - vetorA[qtd_elementos - 1 - i]), 2)
    }
    console.log(`S = ${S}`)
    // let S = Math.pow((vetorA[1] - vetorA[20]), 2) + Math.pow((vetorA[2] - vetorA[19]), 2)
}

main()