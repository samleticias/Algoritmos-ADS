// Um dos recursos disponibilizados pelos editores de texto mais modernos é a contagem da quantidade de
// palavras de um texto. Escreva um programa que determine o numero de palavras de um texto digitado.
import { question } from 'readline-sync'

function main(){
    let frase = question("Digite uma frase: ")
    let qtd_palavras = conta_qtd_palavras(frase)
    console.log(`A frase informada tem ${qtd_palavras} palavras.`)

}

function conta_qtd_palavras(frase){
    let contador = 1
    for (let i = 0; i < frase.length; i++){
        if (frase[i] == ' '){
            contador++
        }
    }
    return contador
}

main()