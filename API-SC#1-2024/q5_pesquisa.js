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
        pesquisa += `${ordem} - ${descricao} (${especificacao})  R$ ${valor.toFixed(2)} \n`

        inclusao = question('Deseja incluir algum produto? (S/N) ')

        if (inclusao === 'N') {
            print('-------- PESQUISA DE PREÇOS --------')
            //pesquisa += `${descricao} (${especificacao})  R$ ${valor.toFixed(2)}`
            let qtd_parcelas = obter_quantidade_de_parcelas(soma_precos_produtos)
            let parcela = obter_parcelas(soma_precos_produtos)
            print(pesquisa)
            print('------------------------------------')
            print(`Valor Total:                 R$ ${soma_precos_produtos.toFixed(2)}`)
            print('------------------------------------')
            print(`${qtd_parcelas} parcelas de R$ ${parcela.toFixed(2)} `)
            print('------------------------------------')
        }
    }
}

function obter_quantidade_de_parcelas(soma_precos_produtos){
    let qtd_parcelas = 0
    if (soma_precos_produtos < 30.00){
        qtd_parcelas = 0
    } else if (soma_precos_produtos >= 30.00 && soma_precos_produtos < 100.00){
        qtd_parcelas = 3
    } else if (soma_precos_produtos > 100.00){
        qtd_parcelas = 5
    } else {
        qtd_parcelas = 6
    }

    return qtd_parcelas
}

function obter_parcelas(soma_precos_produtos){
    // Até R$ 30 não é possível parcela
    let parcela = 0
    if (soma_precos_produtos < 30.00){
        parcela = 0
    } else if (soma_precos_produtos >= 30.00 && soma_precos_produtos < 100.00){ // A partir de R$ 30 até R$ 100 é possível parcelar em até 3x
        parcela = soma_precos_produtos / 3
    } else if (soma_precos_produtos > 100.00){ //Acima de R$ 100 é possível parcelar em até 5x
        parcela = soma_precos_produtos / 5
    } else {
        // Qualquer valor é possível parcelar em até 6x, porém nesse caso
        // Tem-se Juros Compostos (ou seja, que se acumulam em cada
        // parcela para calcular a próxima) com taxa de 5% a.m.
        parcela = obter_juros_compostos(soma_precos_produtos)

    }

    return parcela
}

function obter_juros_compostos(soma_precos_produtos){
    let montante = soma_precos_produtos * Math.pow((1 + 0.05),6)
    let valor_juros = soma_precos_produtos - montante
    return valor_juros

}

main()