// Leia uma frase e gere uma nova frase, substituindo o algarismo que aparecer na frase por seu extenso.
import { question } from 'readline-sync'

function main() {
    let frase = question("Digite uma frase: ")
    let nova_frase = escreve_numero_por_extenso(frase)
    console.log(nova_frase)
}

function escreve_numero_por_extenso(frase) {
    const numeros_por_extenso = {
        '0': 'zero',
        '1': 'um',
        '2': 'dois',
        '3': 'três',
        '4': 'quatro',
        '5': 'cinco',
        '6': 'seis',
        '7': 'sete',
        '8': 'oito',
        '9': 'nove'
    }

    let novaFrase = ''
    
    for (let i = 0; i < frase.length; i++) {
        let char = frase[i]
        if (numeros_por_extenso[char] !== undefined) {
            novaFrase += numeros_por_extenso[char]
        } else {
            novaFrase += char
        }
    }

    return novaFrase
}

main()
