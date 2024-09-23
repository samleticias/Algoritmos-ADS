// Leia uma frase e gere uma nova frase, retirando os espaços entre as palavras.
import { question } from 'readline-sync'

function main(){
    let frase = question("Digite uma frase: ")
    let nova_frase = retira_espacos_entre_palavras(frase)
    console.log(nova_frase)
}

function retira_espacos_entre_palavras(frase) {
    return frase.replace(/\s+/g, '');
}

main()