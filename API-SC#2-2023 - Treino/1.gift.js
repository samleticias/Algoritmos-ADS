import { question } from 'readline-sync'
import { get_number, print } from '../utils/io_utils.js'

function main(){
    // devem ser lidos N compras Nome Cliente e Valor Compras)
    const numero_compras = get_number('Digite o número de compras: ')
    let contador_compras = 0
    let soma_total_vendas = 0
    let soma_valor_distribuido_cashback = 0
    let contador_cashback = 0
    let cashback_maior = -Infinity
    let cashback_menor = Infinity

    while (contador_compras < numero_compras){
        const nome_cliente = question('Nome Cliente: ')
        const valor_compras = get_number('Valor Compras R$: ')

        const cashback_atual = calcular_valor_cashback(valor_compras)

        cashback_maior = obter_cashback_maior(cashback_maior, cashback_atual)
        cashback_menor = obter_cashback_menor(cashback_maior, cashback_atual)

        soma_valor_distribuido_cashback += cashback_atual
        contador_cashback++

        contador_compras++
        soma_total_vendas += valor_compras
    }

    const percentual_cashback_total_vendas = (soma_valor_distribuido_cashback / soma_total_vendas) * 100
    const valor_medio_pago_cashback = soma_valor_distribuido_cashback / contador_cashback

    print('>>>>>> COMPRAS <<<<<<')
    print('------------------------------------------')
    print(`Valor distribuído em cashback R$: ${soma_valor_distribuido_cashback.toFixed(2)}`)
    print(`Percentual cashback investido pela loja (%): ${percentual_cashback_total_vendas.toFixed(2)} %`)
    print(`Faturamento total (sem cashback) R$: ${soma_total_vendas.toFixed(2)} `)
    print(`Menor valor pago em cashback R$: ${cashback_menor.toFixed(2)}`)
    print(`Maior valor pago em cashback R$: ${cashback_maior.toFixed(2)}`)
    print(`Valor médio pago em cashback R$: ${valor_medio_pago_cashback.toFixed(2)}`)

}

function obter_cashback_maior(cashback_maior, cashback_atual){
    return Math.max(cashback_maior, cashback_atual)
}

function obter_cashback_menor(cashback_menor, cashback_atual){
    return Math.min(cashback_menor, cashback_atual)
}

function faixa_cashback_compra_menor_750(valor_compras){ // valor cashback caso compra seja menor que 750
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

function faixa_cashback_compra_maior_750(valor_compras) { // valor cashback caso compra seja maior que 750
    const valor_compras_acima_750 = valor_compras - 750 // subtrai o excedente quando as compras passam de 750,00
    const cashback_acima_750 = valor_compras_acima_750 * 0.25
    const cashback_abaixo_750 = faixa_cashback_compra_menor_750(750) // pega valor abaixo de 750 e calcula cashback menor 750
    return cashback_acima_750 + cashback_abaixo_750 // retorna soma de cashback total no caso de valores maiores que 750
}

function calcular_valor_cashback(valor_compras) { // verifica valor das compras e chama a função adequada no if
    if (valor_compras < 750) {
        return faixa_cashback_compra_menor_750(valor_compras)
    } else {
        return faixa_cashback_compra_maior_750(valor_compras)
    }
}

main()