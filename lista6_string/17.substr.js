// Escreva uma sub-rotina de nome substr, que extraia uma sub-cadeia de uma string. Ex.: substr(texto,
//     10, 20), extrairá 20 caracteres de texto a partir do caractere na posição 10.
import { question } from 'readline-sync'

function main(){
    let texto = question("Digite um texto: ")
    let pos_inicial = Number(question("Posição Inicial: "))
    let pos_final = Number(question("Posição Final: "))
    let substring = substr(texto, pos_inicial, pos_final)
    console.log(`Substring: ${substring}`)
}

function substr(texto, pos_inicial, pos_final){
    let sub_cadeia = ''
    for (let i = pos_inicial; i <= pos_final; i++){
        sub_cadeia += texto[i]
    }
    return sub_cadeia
}

main()