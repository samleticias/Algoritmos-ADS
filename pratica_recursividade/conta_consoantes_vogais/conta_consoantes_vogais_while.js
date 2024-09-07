import { get_text, print } from '../../utils/io_utils.js';
import { texto_para_caixa_baixa } from '../../utils/my_string_utils.js';
import { meu_length, meu_push, meu_split } from '../../utils/my_collection_utils.js';

function main() {
    let frase = get_text('\nDigite uma frase: ')

    frase = meu_split(frase, " ").join("")
    frase = meu_split(frase, ",").join("")

    let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let quantidade_vogais = []
    let quantidade_consoantes = []

    contar_vogais_e_consoantes(vogais, quantidade_consoantes, quantidade_vogais, frase)

    print(`\nQuantidade de vogais: ${meu_length(quantidade_vogais)}`)
    print(`\nQuantidade de consoantes: ${meu_length(quantidade_consoantes)}`)
    print(`\nVogais na frase: ${quantidade_vogais.join(', ')}`)
    print(`\nConsoantes na frase: ${quantidade_consoantes.join(', ')}\n`)
}

function contar_vogais_e_consoantes(vogais, quantidade_consoantes, quantidade_vogais, texto) {
    let i = 0
    while (i < meu_length(texto)) {
        let letra = texto_para_caixa_baixa(texto[i])
        let j = 0
        let eh_vogal = false
        while (j < meu_length(vogais)) {
            if (letra === vogais[j]) {
                meu_push(quantidade_vogais, letra)
                eh_vogal = true
                break
            }
            j++
        }
        if (!eh_vogal && letra.trim() !== '') { 
            meu_push(quantidade_consoantes, letra)
        }
        i++
    }
}

main()
