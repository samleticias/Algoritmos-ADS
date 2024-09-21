// Leia um vetor com N elementos, encontre e escreva o maior e o menor elemento e suas respectivas
// posições no vetor.
import { question } from 'readline-sync'

function main(){
    let maior_elemento = -999999999
    let menor_elemento = 9999999999
    let qtd_elementos = Number(question("Quantidade de elementos: "))
    let vetor = []
    for (let i = 0; i < qtd_elementos; i++){
        let elemento = Number(question(`Elemento ${i + 1}: `))
        vetor.push(elemento)
    }
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < menor_elemento){
            menor_elemento = vetor[i]
        }
        if (vetor[i] > maior_elemento){
            maior_elemento = vetor[i]
        }
    }
    console.log(`Maior elemento = ${maior_elemento}`)
    console.log(`Menor elemento = ${menor_elemento}`)
}

main()