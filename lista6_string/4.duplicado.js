// Leia uma frase e gere uma nova frase, duplicando cada caractere da frase digitada.
import { question } from 'readline-sync'

function main(){
    let frase = question("Digite uma frase: ")
    let nova_frase = duplica_caracteres(frase)
    console.log(nova_frase)
}

function duplica_caracteres(frase){
    let nova_frase = ''
    for (let i = 0; i < frase.length; i++){
        nova_frase += frase[i] + frase[i]
    }
    return nova_frase
}

main()