// Leia um vetor com N elementos, ordene-o e escreva-o em ordem crescente.
import { question } from 'readline-sync'

function main(){
    let qtd_elementos = Number(question("Quantidade de elementos: "))
    let vetor = []
    for (let i = 0; i < qtd_elementos; i++){
        let elemento = Number(question(`Elemento ${i+1}: `))
        vetor.push(elemento)
    }
    vetor.sort((a, b) => a - b)
    console.log(">>>> Elementos do vetor em ordem crescente <<<<")
    for (let i = 0; i < vetor.length; i++){
        console.log(`Elemento ${i+1}: ${vetor[i]}`)
    }
}

main()