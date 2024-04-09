import { question } from 'readline-sync'
import {get_number, print} from '../utils/io_utils.js'

function main(){
    //devem ser lidos N compras Nome Cliente e Valor Compras
    let contador_compras = 0
    let soma_total_vendas = 0
    let soma_valor_distribuido_cashback = 0
    let cashback_atual = 0
    let cashback_maior = -Infinity
    let cashback_menor = Infinity
    const N_compras = get_number('Número de compras: ')

    while(contador_compras < N_compras){
        let nome_cliente = question('Nome Cliente: ')
        let valor_compras = get_number('Valor Compras R$: ')
        contador_compras++
        soma_total_vendas += valor_compras

        cashback_atual = 0
        if (valor_compras < 750){
            cashback_atual = calcular_cashback_abaixo_750(valor_compras)
        } else {
            cashback_atual = calcular_cashback_acima_750(valor_compras)
        }

        cashback_maior = obter_cashback_maior(cashback_maior, cashback_atual)
        cashback_menor = obter_cashback_menor(cashback_maior, cashback_atual)

        soma_valor_distribuido_cashback += cashback_atual
    }

    let percentual_cashback_total = obter_percentual_investido_cashback(soma_valor_distribuido_cashback, soma_total_vendas)
    let valor_medio_cashback = calcular_valor_medio_pago_em_cashback(soma_valor_distribuido_cashback, N_compras)

    print('>>>>>>>>>>>>>>>>>>>> COMPRAS <<<<<<<<<<<<<<<<<<<<<<<<<<')
    print('-------------------------------------------------------')
    print(`Faturamento Total R$: ${soma_total_vendas.toFixed(2)}`)
    print(`Valor Distribuído em Cashback R$: ${soma_valor_distribuido_cashback.toFixed(2)}`)
    print(`Percentual Investido em cashback pela Loja (%): ${percentual_cashback_total.toFixed(2)}`)
    print(`Maior Cashback R$: ${cashback_maior.toFixed(2)} `)
    print(`Menor Cashback R$: ${cashback_menor.toFixed(2)}`)
    print(`Valor Médio Pago em Cashback R$: ${valor_medio_cashback.toFixed(2)}`)
}

function calcular_valor_medio_pago_em_cashback(soma_valor_distribuido_cashback, N_compras){
    let valor_medio_pago_cashback = soma_valor_distribuido_cashback / N_compras
    return valor_medio_pago_cashback
}

function obter_percentual_investido_cashback(soma_valor_distribuido_cashback, soma_total_vendas){
    let percentual_cashback = (soma_valor_distribuido_cashback/ soma_total_vendas) * 100
    return percentual_cashback
}

function obter_cashback_maior(cashback_maior, cashback_atual){
    return Math.max(cashback_maior, cashback_atual)
}

function obter_cashback_menor(cashback_menor, cashback_atual){
    return Math.min(cashback_menor, cashback_atual)
}

function calcular_cashback_abaixo_750(valor_compras){
    /*
    para compras mensais de até R$ 250 reais, é feita a
    conversão (geração) de cashback de 5%; Para compras acima de
    R$ 250 até R$ 500, 7% de cashback; De R$ 500 até R$ 750, 8%
    de cashback;
    */
   let cashback_resultante = 0
   if (valor_compras < 250){
    cashback_resultante = valor_compras * 0.05
   } else if (valor_compras < 500){
    cashback_resultante = valor_compras * 0.07
   } else if (valor_compras < 750){
    cashback_resultante = valor_compras * 0.08
   }
   return cashback_resultante
}

function calcular_cashback_acima_750(valor_compras){
    /*
    E para compras acima de R$ 750 é aplicado
    primeiramente as regras anteriores até R$ 750 do valor em cada
    faixa, e 25% sobre o valor acima de R$ 750.
    */
    let valor_menor_750 = valor_compras - 750
    let cashback_abaixo_750 = calcular_cashback_abaixo_750(valor_menor_750)
    let cashback_acima_750 = (valor_compras - cashback_abaixo_750) * 0.25
    let cashback_total_acima_750 = cashback_abaixo_750 + cashback_acima_750
    return cashback_total_acima_750
}

main()