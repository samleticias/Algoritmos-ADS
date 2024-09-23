import { get_text, print } from '../../utils/io_utils.js';
import { meu_length, meu_push, meu_split } from '../../utils/my_collection_utils.js';

function main() {
    let frase = get_text('\nDigite uma frase: ')

    frase = meu_split(frase, " ").join("")
    frase = meu_split(frase, ",").join("")

    let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let todas_as_vogais = []
    let todas_as_consoantes = []
    let posicao_vogal = 0
    let i = 0

    contar_vogais_e_consoantes(vogais, todas_as_consoantes, todas_as_vogais, frase, i, posicao_vogal)

    print(`\nQuantidade de vogais: ${meu_length(todas_as_vogais)}`)
    print(`\nVogais na frase: ${todas_as_vogais.join(', ')}`)
    print(`\nQuantidade de consoantes: ${meu_length(todas_as_consoantes)}`)
    print(`\nConsoantes na frase: ${todas_as_consoantes.join(', ')}\n`)
}

function contar_vogais_e_consoantes(vogais, quantidade_consoantes, quantidade_vogais, texto, i, posicao_vogal){
    if (i == meu_length(texto)){
        return `QUANTIDADE DE VOGAIS: ${quantidade_vogais.length}\nQUANTIDADE DE CONSOANTES: ${quantidade_consoantes.length}`
    } else {
        if(texto[i] == vogais[posicao_vogal]){
            meu_push(quantidade_vogais, texto[i])
            posicao_vogal = 0
            return contar_vogais_e_consoantes(vogais, quantidade_consoantes, quantidade_vogais, texto, i+= 1, posicao_vogal)
        }
        if(posicao_vogal === meu_length(vogais) - 1){
            meu_push(quantidade_consoantes, texto[i])
            posicao_vogal = 0
            return contar_vogais_e_consoantes(vogais, quantidade_consoantes, quantidade_vogais, texto, i+=1, posicao_vogal)
        }
        return contar_vogais_e_consoantes(vogais, quantidade_consoantes, quantidade_vogais, texto, i, posicao_vogal+=1)
    }
}            

main()
