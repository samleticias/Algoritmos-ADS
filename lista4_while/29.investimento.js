/*
Escreva um algoritmo que calcula o retorno de um investimento financeiro. O usuário deve informar
quanto será investido por mês e qual será a taxa de juros mensal. O algoritmo deve informar o saldo do
investimento após um ano (soma das aplicações mensais + juros compostos), e perguntar ao usuário se
deseja calcular o ano seguinte, sucessivamente. Por exemplo, caso o usuário deseje investir R$ 100,00
por mês, e tenha uma taxa de juros de 1% ao mês, o algoritmo forneceria a seguinte saída:
Saldo do investimento após 1 ano: 1268.25
Deseja processar mais um ano (S/N) ?
*/
import { question } from 'readline-sync'
import { get_number, print } from '../utils/io_utils.js'

function main(){

    let saldo_investimento_apos_um_ano = 0

    const prazo = 12 

    let resposta = 'S'

    while(resposta !== 'N'){
        const investimento_mensal = get_number('Investimento Mensal R$: ')
        const taxa_juros_mensal = get_number('Taxa de Juros Mensal (%): ')

        saldo_investimento_apos_um_ano += calcular_investimento_apos_um_ano(investimento_mensal, taxa_juros_mensal, prazo)
        
        resposta = question('Deseja processar mais um ano (S/N)? ')
    }

    print('************ INVESTIMENTO ************ ')
    print('--------------------------------------------------')
    print(`Saldo do investimento após 1 ano R$ : ${saldo_investimento_apos_um_ano.toFixed(2)}`)
}

function calcular_investimento_apos_um_ano(investimento_mensal, taxa_juros_mensal, prazo){
    const investimento = (investimento_mensal * taxa_juros_mensal * prazo) / 100 

    return investimento
}

main()