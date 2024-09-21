// Contar Vogais e Consoantes de Frase.
import { get_text, print} from '../../utils/io_utils.js'
import {meu_split, meu_filter, meu_push} from '../../utils/my_collection_utils.js'
import {eh_vogal} from '../../utils/my_string_utils.js'

function main(){
    let frase = get_text('\nDigite uma frase: ')

    frase = meu_split(frase, ' ')

    let quantidade_vogais = conta_quantidade_vogais(frase)

    let quantidade_consoantes = conta_quantidade_consoantes(frase)

    let todas_as_vogais = mostrar_vogais(frase)

    let todas_as_consoantes = mostrar_consoantes(frase)

    print(`\nQuantidade de vogais: ${quantidade_vogais}`)
    print(`\nVogais na frase: ${todas_as_vogais.join(', ')}`)
    print(`\nQuantidade de consoantes: ${quantidade_consoantes}`)
    print(`\nConsoantes na frase: ${todas_as_consoantes.join(', ')}\n`)

}

function conta_quantidade_vogais(texto){
    let qtd_vogais = 0
    for (let palavra of texto){
        for (let letra of palavra){
            if (eh_vogal(letra)){
                qtd_vogais = qtd_vogais + 1
            }
        }
    }
    return qtd_vogais
}

function conta_quantidade_consoantes(texto){
    let qtd_consoantes = 0
    for (let palavra of texto){
        for (let letra of palavra){
            if (!eh_vogal(letra)){
                qtd_consoantes = qtd_consoantes + 1
            }
        }
    }
    return qtd_consoantes
}

function mostrar_vogais(texto) {
    let todas_as_vogais = []
    for (let palavra of texto) {
        let vogais_na_palavra = meu_filter(palavra, letra => eh_vogal(letra))
        for (let vogal of vogais_na_palavra) {
            meu_push(todas_as_vogais, vogal)
        }
    }
    return todas_as_vogais
}

function mostrar_consoantes(texto) {
    let todas_as_consoantes = []
    for (let palavra of texto) {
        let consoantes_na_palavra = meu_filter(palavra, letra => !eh_vogal(letra))
        for (let consoante of consoantes_na_palavra) {
            meu_push(todas_as_consoantes, consoante)
        }
    }
    return todas_as_consoantes
}

main()