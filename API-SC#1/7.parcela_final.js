import { question } from 'readline-sync'
import { get_positive_number, print } from '../utils/io_utils.js'

function main(){
const valor_veiculo = get_positive_number('Valor Veículo R$: ')
const renda_comprador = get_positive_number('Renda do Comprador R$: ')
const emprego = question('Você é servidor público ou servidor privado (publico/privado) ')
const valor_entrada = get_positive_number('Valor Entrada (mínimo 30% do valor do veículo) R$: ')
// const percentual_saida = get_positive_number('Percentual Saída (no máximo 30%) (%): ')
const meses = get_positive_number('Em quantos meses deseja parcelar o saldo devedor? ')
const taxa_juros = get_positive_number('Taxa de Juros Financiamento (> 1.87% ao mês) (%): ')
// const taxa_inflacao_mes = get_positive_number('Taxa Inflação do Mês (%): ')
const iof = valor_veiculo * (0.38/100)
const verificacao_valor_entrada = permitir_financiamento(valor_entrada, valor_veiculo)
const valor_a_ser_financiado = valor_veiculo - valor_entrada
const valor_financiado = calcular_financiamento_normal(valor_a_ser_financiado, taxa_juros, meses)
const valor_total_iof = calcular_iof(valor_a_ser_financiado, iof)
const parcela = calcular_parcelas(valor_total_iof, valor_financiado, meses)

const meu_financiamento = `
Valor de Entrada R$: ${valor_entrada}
Autorização Financiamento: ${verificacao_valor_entrada}
valor a ser financiado sem IOF R$: ${valor_a_ser_financiado}
valor do IOF R$: ${valor_total_iof.toFixed(2)}
valor a ser financiado com IOF R$: ${(valor_financiado + valor_total_iof).toFixed(2)}
valor da saída (% - R$)
Parcelamento: ${meses} parcelas de R$ ${parcela.toFixed(2)}
Soma das Parcelas: R$ ${(parcela * meses).toFixed(2)}
Total a ser pago (Entrada+Parcelamento+Saída) R$: ${(valor_entrada + (parcela * meses)).toFixed(2)}
Se parcela cabe na renda do comprador

`

print(meu_financiamento)

}

function calcular_financiamento_normal(valor_a_ser_financiado, taxa_juros, meses){
    //J = C ∙ i ∙ t
    const financiamento = valor_a_ser_financiado * (taxa_juros/100) * (meses - 1)
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

function calcular_iof(valor_a_ser_financiado, iof){
    // o IOF é uma parte fixa em 0,38% sobre o valor financiado.
    // E mais 0,01118% ao dia (em juros simples) também sobre valor financiado. 
    const valor_iof = valor_a_ser_financiado * iof 
    const juros_diario_iof = valor_a_ser_financiado * (0.01118/100)
    const valor_total_iof = valor_iof + juros_diario_iof
    return valor_total_iof

}

function calcular_parcelas(valor_total_iof, valor_financiado, meses){
    // O IOF junta-se ao valor financiado para compor as parcelas.
    const valor_parcela = (valor_total_iof + valor_financiado) / meses
    return valor_parcela
}


main()