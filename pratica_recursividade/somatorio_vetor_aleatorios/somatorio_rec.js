// Dado um intervalo A e B, calcular o somatório de um Vetor de N Elementos Aleatórios.
import { get_text, print} from '../../utils/io_utils.js'
import { get_random_number, int } from '../../utils/math_utils.js'
import {meu_length, meu_split, mapear, meu_push, exibe_elementos_vetor} from '../../utils/my_collection_utils.js'

function main(){
    let intervalo = meu_split(get_text('\nInforme o intervalo numérico separado por espaço: '), ' ')
    
    intervalo = mapear(intervalo, int)

    let tamanho_vetor = get_text('\nQuantos elementos você deseja no vetor? ')

    let vetor = gerar_vetor(tamanho_vetor)

    vetor = preencher_vetor_aleatorios(vetor, intervalo, tamanho_vetor)

    exibe_elementos_vetor(vetor, '\nVetor preenchido:\n')

    let somatorio_valores_vetor = obter_somatorio_valores(vetor)

    print(`\nSomatório dos valores = ${somatorio_valores_vetor}\n`)
}

function obter_somatorio_valores(vetor, tamanho_vetor){
    if (tamanho_vetor === 0) {
        return []
    }
    let somatorio = obter_somatorio_valores(vetor, tamanho_vetor - 1)
    return somatorio
    // let somatorio = 0

    // for (let i = 0; i < meu_length(vetor); i++){
    //     somatorio = somatorio + vetor[i]
    // }
    // return somatorio
}

function preencher_vetor_aleatorios(vetor, intervalo, tamanho_vetor){
    if (tamanho_vetor === 0) {
        return []
    }
    vetor = preencher_vetor_aleatorios(vetor, intervalo, tamanho_vetor - 1)
    meu_push(vetor, get_random_number(intervalo[0], intervalo[1]))
    return vetor
}

function gerar_vetor(tamanho_vetor) {
    if (tamanho_vetor === 0) {
        return []
    }
    const vetor = gerar_vetor(tamanho_vetor - 1)
    meu_push(vetor, ' ')
    return vetor
}

main()