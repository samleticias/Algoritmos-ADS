// Leia um verbo regular terminado em ER e mostre sua conjugação no presente.
import { question } from 'readline-sync';

function main() {
    let verbo = question("Digite um verbo regular terminado em ER que deseja conjugar: ").toLowerCase()
    if (verbo.endsWith("er") && verbo.length > 2) {
        let conjugacoes = conjugarVerboER(verbo)
        console.log("Conjugação do verbo no presente do indicativo:")
        console.log(`Eu ${conjugacoes[0]}`)
        console.log(`Tu ${conjugacoes[1]}`)
        console.log(`Ele/Ela/Você ${conjugacoes[2]}`)
        console.log(`Nós ${conjugacoes[3]}`)
        console.log(`Vós ${conjugacoes[4]}`)
        console.log(`Eles/Elas/Vocês ${conjugacoes[5]}`)
    } else {
        console.log("Insira um verbo regular terminado em ER.")
    }
}

function conjugarVerboER(verbo) {
    let radical = verbo.slice(0, -2) 
    return [
        radical + 'o', 
        radical + 'es',  
        radical + 'e',   
        radical + 'emos',
        radical + 'eis', 
        radical + 'em'   
    ]
}

main()
