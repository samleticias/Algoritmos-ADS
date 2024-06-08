// Faça a criptografia de uma frase digitada pelo usuário. Na criptografia, a frase deverá ser invertida e as
// consoantes deverão ser substituídas pelo caractere #.
import { question } from 'readline-sync'

function main(){
    let frase = question("Digite uma frase: ")

    let fraseCripgrafada = fazCriptografia(frase)
    console.log(`Frase criptografada: ${fraseCripgrafada}`)
}

function fazCriptografia(frase){
    let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let fraseCripgrafada = ''
    for (let i = 0; i < frase.length; i++){
        if (vogais.includes(frase[i]) || frase[i] == ' '){
            fraseCripgrafada += frase[i]
        } else {
            fraseCripgrafada += '#'
        }
    }
    let fraseInvertida = fraseCripgrafada.split('').reverse().join('');
    return fraseInvertida;
}

main()