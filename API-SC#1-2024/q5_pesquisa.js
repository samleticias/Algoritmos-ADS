import { question } from 'readline-sync'
import {get_number, print} from '../utils/io_utils.js'

function main(){
    let soma_precos_produtos = 0
    let inclusao = question('Deseja incluir algum produto? (S/N) ')
    let ordem = 0
    let pesquisa = ''

    while(inclusao !== 'N'){
        const descricao = question('Descrição: ')
        const especificacao = question('Especificação: ')
        const valor = get_number('Valor R$: ')
        soma_precos_produtos += valor
        ordem++
        pesquisa += `${descricao} (${especificacao})  R$ ${valor.toFixed(2)} \n`

        inclusao = question('Deseja incluir algum produto? (S/N) ')

        if (inclusao === 'N') {
            print('-------- PESQUISA DE PREÇOS --------')
            //pesquisa += `${descricao} (${especificacao})  R$ ${valor.toFixed(2)}`
            print(pesquisa)
            print('------------------------------------')
            print(`Valor Total:                 R$ ${soma_precos_produtos.toFixed(2)}`)
    }
}
}

main()