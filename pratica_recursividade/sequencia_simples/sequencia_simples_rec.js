// Função que imprime uma Sequência Simples de A até B.
import {get_text, print} from '../../utils/io_utils.js'
import {meu_push, meu_split, meu_length, mapear} from '../../utils/my_collection_utils.js'
import {int} from '../../utils/math_utils.js'

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

    function gerar(min, max, sequencia){
        if (min > max) return sequencia
        meu_push(sequencia, min)

        return gerar(min + 1, max, sequencia)
    }
    return gerar(min, max, [])
}

main()