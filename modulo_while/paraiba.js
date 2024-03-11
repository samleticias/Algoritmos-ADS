import { get_positive_number, print } from '../utils/io_utils.js'
function main() {
    
    print('****** BBB30 & Paraíba *******')
    print('------------------------------')

    const cupom_perc = get_positive_number('Valor do Desconto (%): ')
    const qtd_max_vendas = get_positive_number('Limite de Compras: ')
    const limite_desconto_rs = get_positive_number('Limite de R$: ')

    let contador_vendas = 0
    let somatorio_descontos_concedidos = 0
    let somatorio_vendas = 0

    while (contador_vendas < qtd_max_vendas && somatorio_descontos_concedidos < limite_desconto_rs) {
        const valor_compra = get_positive_number('Valor R$: ')
        const desconto_compra = valor_compra * (cupom_perc / 100)

        // Verificacao de limite de desconto residual
        const desconto_total_disponivel = limite_desconto_rs - somatorio_descontos_concedidos
        if (desconto_compra > desconto_total_disponivel) {
            desconto_compra = desconto_total_disponivel
        }

        print(`Parabéns! Cupom aceito, você ganhou R$ ${desconto_compra.toFixed(2)}`)

        contador_vendas += 1
        somatorio_descontos_concedidos += desconto_compra
        somatorio_vendas += valor_compra
    }

    // Resultados
    const somatorio_vendas_liquido = somatorio_vendas - somatorio_descontos_concedidos

    print('------------------------------')
    const resultado = `
    >>>> RESUMO DA PROMO <<<<<
    Cupom: ${cupom_perc}%
    Quantidade Limite: ${qtd_max_vendas}
    Valor Limite Desc: R$ ${limite_desconto_rs}
    ---------
    Vendas Realizadas: ${contador_vendas}
    Vendas (em R$)   : ${somatorio_vendas}
    Descontos (em R$): ${somatorio_descontos_concedidos}
    Vendas (Líq. R$) : ${somatorio_vendas_liquido}
    `

    print(resultado)
    print('------------------------------')
}

main()
