// Função que imprime uma Sequência Simples de A até B.
import {get_number, get_text, print} from '../../utils/io_utils.js'
import {meu_push, meu_split, meu_length} from '../../utils/my_collection_utils.js'

function main(){
    let intervalo = meu_split(get_text('\nInforme o intervalo numérico separado por espaço: '), ' ')

    intervalo = mapear(intervalo, int)

    let sequencia_simples = gerar_sequencia(intervalo)

    print('\n<---------------------- Sequência Simples ---------------------->')
    print(`\n> Intervalo: ${intervalo[0]} a ${intervalo[1]} <\n`)
    print(sequencia_simples.join(', ') + '\n')

}

function gerar_sequencia(intervalo){
    let min = intervalo[0]
    let max = intervalo[1]

    let sequencia_simples = []

    for (let i = min; i <= max; i++){
        meu_push(sequencia_simples, i)
    }
    return sequencia_simples
}

function int(texto) {
    return Math.floor(Number(texto))
}

function mapear(colecao, funcao_transformadora){
    for (let i = 0; i < meu_length(colecao); i++){
        colecao[i] = funcao_transformadora(colecao[i])
    }
    return colecao
}

main()