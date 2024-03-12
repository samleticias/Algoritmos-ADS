import { question } from 'readline-sync'
import { get_positive_number, print } from '../utils/io_utils.js'

function main(){
    const valor_veiculo = get_positive_number('Valor Veículo R$: ')
    const renda_comprador = get_positive_number('Renda do Comprador R$: ')
    const emprego = question('Você é servidor público ou servidor privado (publico/privado): ')
    const valor_entrada = get_positive_number('Valor Entrada (mínimo 30% do valor do veículo) R$: ')
    // const percentual_saida = get_positive_number('Percentual Saída (no máximo 30%) (%): ')
    const meses = get_positive_number('Em quantos meses deseja parcelar o saldo devedor? ')
    const taxa_juros = get_positive_number('Taxa de Juros Financiamento (> 1.87% ao mês) (%): ')
    // const taxa_inflacao_mes = get_positive_number('Taxa Inflação do Mês (%): ')
    const verificacao_valor_entrada = permitir_financiamento(valor_entrada, valor_veiculo)
    const valor_a_ser_financiado = valor_veiculo - valor_entrada
    const valor_financiado = calcular_financiamento_normal(valor_a_ser_financiado, taxa_juros, meses)
    const valor_total_iof = calcular_iof(valor_a_ser_financiado)
    const parcela = calcular_parcelas(valor_total_iof, valor_financiado, meses)

    const percentual_saida = get_positive_number('Percentual Saída (no máximo 30%) (%): ')
    const valor_saida = calcular_valor_saida(valor_financiado + valor_total_iof, percentual_saida)

const meu_financiamento = `
Valor de Entrada R$: ${valor_entrada}
Autorização Financiamento: ${verificacao_valor_entrada}
valor a ser financiado sem IOF R$: ${valor_a_ser_financiado}
valor do IOF R$: ${valor_total_iof.toFixed(2)}
valor a ser financiado com IOF R$: ${(valor_financiado + valor_total_iof).toFixed(2)}
Valor da saída (% - R$): ${percentual_saida.toFixed(2)}% - R$ ${valor_saida.toFixed(2)}
Parcelamento: ${meses} parcelas de R$ ${parcela.toFixed(2)}
Soma das Parcelas: R$ ${(parcela * meses).toFixed(2)}
Total a ser pago (Entrada + Parcelamento + Saída) R$: ${(valor_entrada + (parcela * meses)).toFixed(2)}
Se a parcela cabe na renda do comprador: ${verificar_parcela_na_renda(parcela, renda_comprador)}
`

print(meu_financiamento)

if (verificar_parcela_na_renda(parcela, renda_comprador)) {
    print('A parcela cabe no bolso do comprador')
} else {
    print('A parcela não cabe no bolso do comprador')
}

}

function calcular_financiamento_normal(valor_a_ser_financiado, taxa_juros, meses){
    //J = C ∙ i ∙ t
    const financiamento = (valor_a_ser_financiado * (taxa_juros) * (meses - 1))/100
    return financiamento
}

function permitir_financiamento(valor_entrada, valor_veiculo){
    // O Cliente faz o pagamento de um entrada, ou seja, logo no início paga um valor do veículo (zero juros), No mínimo 30% do valor do veículo
    if (valor_entrada < valor_veiculo * 0.3){
        return 'FINANCIAMENTO NÃO AUTORIZADO! Valor Entrada deve ser no mínimo 30% do valor do veículo'
    } else {
        return 'FINANCIMENTO AUTORIZADO!'
    }
}

function calcular_iof(valor_a_ser_financiado){
    // o IOF é uma parte fixa em 0,38% sobre o valor financiado.
    // E mais 0,01118% ao dia (em juros simples) também sobre valor financiado.
    const taxa_iof = 0.38/100
    const valor_iof = valor_a_ser_financiado * taxa_iof 
    const juros_diario_iof = valor_a_ser_financiado * (0.01118/100)
    const valor_total_iof = valor_iof + juros_diario_iof
    return valor_total_iof

}

function calcular_parcelas(valor_total_iof, valor_financiado, meses){
    // O IOF junta-se ao valor financiado para compor as parcelas.
    const valor_parcela = (valor_total_iof + valor_financiado) / meses
    return valor_parcela
}

function verificar_parcela_na_renda(parcela, renda_comprador) {
    const limite_parcela = renda_comprador * 0.3 // Limite de 30% da renda para a parcela
    return parcela <= limite_parcela ? 'Sim' : 'Não'
}

function aplicar_taxa_emprego(emprego, taxa_juros) {
    // Aplica a taxa de juros conforme o tipo de emprego
    if (emprego.toLowerCase() === 'publico') {
        return taxa_juros
    } else if (emprego.toLowerCase() === 'privado') {
        return taxa_juros + 1.5 // setor privado
    } else {
        throw new Error('Tipo de emprego inválido')
    }
}

function calcular_valor_saida(valor_financiado, percentual_saida) {
    // Calcula o valor da saída (última parcela) conforme o percentual informado
    return valor_financiado * (percentual_saida / 100)
}


main()