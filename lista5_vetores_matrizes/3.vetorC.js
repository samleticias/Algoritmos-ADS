// Leia 2 vetores A e B com N elementos, escreva um vetor C, sendo este a junção dos vetores A e B.
// Desta forma, o vetor C deverá ter 2*N elementos.
import { question } from 'readline-sync'

function main() {
    let qtd_elementos = Number(question("Quantidade de elementos: "))

    let A = []
    console.log("Digite os elementos do vetor A:")
    for (let i = 0; i < qtd_elementos; i++) {
        let elemento = Number(question(`Elemento ${i + 1}: `))
        A.push(elemento)
    }

    let B = []
    console.log("Digite os elementos do vetor B:")
    for (let i = 0; i < qtd_elementos; i++) {
        let elemento = Number(question(`Elemento ${i + 1}: `))
        B.push(elemento)
    }

    let C = A.concat(B)

    console.log("Vetor A:", A)
    console.log("Vetor B:", B)
    console.log("Vetor C (junção de A e B):", C)
}

main()
