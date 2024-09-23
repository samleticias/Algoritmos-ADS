import { question } from 'readline-sync'
import { get_number, print } from '../utils/io_utils.js'

function main() {
    const N_compras = get_number('Digite a quantidade de compras: ')
    let soma_valor_distribuido_cashback = 0
    let soma_valor_total_vendas = 0
    let contador_cashback = 0
    let cashback_maior = -Infinity
    let cashback_menor = Infinity

    for (let i = 0; i < N_compras; i++) {
        const nome_cliente = question('Nome Cliente: ')
        const valor_compras = get_number('Valor Compras R$: ')

        const cashback_atual = calcular_valor_cashback(valor_compras)

        soma_valor_distribuido_cashback += cashback_atual
        contador_cashback++
        soma_valor_total_vendas += valor_compras

        cashback_maior = Math.max(cashback_maior, cashback_atual)
        cashback_menor = Math.min(cashback_menor, cashback_atual)
    }

    const percentual_cashback_total_vendas = (soma_valor_distribuido_cashback / soma_valor_total_vendas) * 100
    const valor_medio_pago_cashback = soma_valor_distribuido_cashback / contador_cashback

    print('>>>>>>>> SEMANA DO CONSUMIDOR <<<<<<<<')
    print('--------------------------------------------------------------------------------')
    print(`Valor distribuído em cashback R$: ${soma_valor_distribuido_cashback.toFixed(2)}`)
    print(`Percentual cashback investido pela loja (%): ${percentual_cashback_total_vendas.toFixed(2)} %`)
    print(`Faturamento total (sem cashback) R$: ${soma_valor_total_vendas.toFixed(2)} `)
    print(`Menor valor pago em cashback R$: ${cashback_menor.toFixed(2)}`)
    print(`Maior valor pago em cashback R$: ${cashback_maior.toFixed(2)}`)
    print(`Valor médio pago em cashback R$: ${valor_medio_pago_cashback.toFixed(2)}`)
}

function faixa_cashback_compra_maior_750(valor_compras) {
    const valor_compras_acima_750 = valor_compras - 750
    const cashback_acima_750 = valor_compras_acima_750 * 0.25
    const cashback_abaixo_750 = faixa_cashback_compra_menor_750(750)
    return cashback_acima_750 + cashback_abaixo_750
}

function encontrar_cashback_maior(cashback_maior, cashback_atual) {
    return Math.max(cashback_maior, cashback_atual)
}

function encontrar_cashback_menor(cashback_menor, cashback_atual) {
    return Math.min(cashback_menor, cashback_atual)
}

function faixa_cashback_compra_menor_750(valor_compras) {
    let cashback_resultante = 0
    if (valor_compras <= 250) {
        cashback_resultante = valor_compras * 0.05 // 5%
    } else if (valor_compras <= 500) {
        cashback_resultante = valor_compras * 0.07 // 7%
    } else if (valor_compras <= 750) {
        cashback_resultante = valor_compras * 0.08 // 8%
    }
    return cashback_resultante
}

function calcular_valor_cashback(valor_compras) {
    if (valor_compras < 750) {
        return faixa_cashback_compra_menor_750(valor_compras)
    } else {
        return faixa_cashback_compra_maior_750(valor_compras)
    }
}

main()
