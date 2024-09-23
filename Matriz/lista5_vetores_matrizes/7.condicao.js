// Leia um vetor A de N elementos e escreva um vetor B de N elementos, conforme a seguinte condição:
// se índice de A[índice] é par então B[índice] = 0, caso contrário B[índice] = 1.
import { question } from 'readline-sync'

function main(){
    let qtd_elementos = Number(question("Quantidade de elementos: "))
    let vetorA = []
    for (let i = 0; i < qtd_elementos; i++){
        let elemento = Number(question(`Elemento ${i + 1}: `))
        vetorA.push(elemento)
    }

    let vetorB = new Array(qtd_elementos)
    for (let i = 0; i < qtd_elementos; i++){
        if (i % 2 == 0){
            vetorB[i] = 0
        } else {
            vetorB[i] = 1
        }
    }
    console.log(">>>> Elementos do vetor B <<<<")
    for (let i = 0; i < vetorB.length; i++){
        console.log(`Elemento ${i + 1}: ${vetorB[i]}`)
    }
}

main()