// Leia um vetor A com N elementos e escreva um vetor B, com os mesmos elementos de A, sendo que
// estes deverão estar invertidos, ou seja, o 1o elemento de A deve ser o último elemento de B; o 2o
// elemento de A deve ser o penúltimo elemento de B e assim por diante.
import { question } from 'readline-sync'

function main(){
    let A = []
    let qtd_elementos = Number(question("Quantos elementos terá o vetor A: "))
    
    for (let i = 0; i < qtd_elementos; i++){
        let elemento = Number(question(`Elemento ${i + 1}: `))
        A.push(elemento)
    }

    let B = []
    for (let i = qtd_elementos - 1; i >= 0; i--){
        B.push(A[i])
    }

    console.log("Vetor A:", A)
    console.log("Vetor B (invertido):", B)
}

main()
