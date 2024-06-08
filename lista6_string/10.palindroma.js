// Uma palavra é palíndroma se ela não se altera quando lida da direita para esquerda. Por exemplo, raiar
// é palíndroma. Escreva um programa que verifique se uma palavra digitada é palíndroma.
import { question } from 'readline-sync'

function main() {
    let palavra = question("Digite uma palavra: ")
    
    if (ehPalindroma(palavra)) {
        console.log(`A palavra "${palavra}" é palíndroma.`)
    } else {
        console.log(`A palavra "${palavra}" não é palíndroma.`)
    }
}

function ehPalindroma(palavra) {
    let palavraInvertida = palavra.split('').reverse().join('')
    return palavra === palavraInvertida
}

main()
