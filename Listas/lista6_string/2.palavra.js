// Leia uma frase e mostre cada palavra da frase em uma linha separada.
import { question } from 'readline-sync'

function main() {
    let frase = question("Digite uma frase: ")
    let fatias = fatiador_de_palavras(frase)
    fatias.forEach(palavra => console.log(palavra))
}

function fatiador_de_palavras(frase) {
    return frase.split(' ')
}

main()
