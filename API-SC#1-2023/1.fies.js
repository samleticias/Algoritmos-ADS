import { get_positive_number, print } from '../utils/io_utils.js'

function main() {
    const duracao_curso = get_positive_number('Duração do curso (em anos): ')
    const mensalidade = get_positive_number('Valor Mensalidade R$: ')
    const taxa_selic = get_positive_number('Taxa SELIC (%): ')
    const salario_min = get_positive_number('Salário Mínimo Vigente R$: ')
    const renda_familiar = get_positive_number('Renda Familiar R$: ')
    const qtd_membros_familia = get_positive_number('Quantidade de Membros da Família: ')

    const renda_per_capita = renda_familiar / qtd_membros_familia
    const valor_contratado_anual = calcular_valor_contratado_fies(mensalidade, taxa_selic)
    const valor_financiado = valor_contratado_anual * duracao_curso
    const valor_descontado = calcular_pagamento_durante_curso(duracao_curso, valor_contratado_anual)
    const pg_carencia = calcular_valor_pago_carencia()
    const saldo_devedor_final = calcular_saldo_devedor(valor_contratado_anual, duracao_curso, valor_descontado, pg_carencia)
    const valor_parcelas = parcelar_saldo_devedor(saldo_devedor_final, duracao_curso)
    const parcela_fies = calcular_parcela_fies_renda_aluno(renda_familiar)
    const inscricao_fies = verificar_inscricao_fies(renda_per_capita, salario_min)
    const total_a_pagar = valor_financiado + valor_descontado + pg_carencia + valor_parcelas + parcela_fies
    const total_juros = calcular_valor_contratado_fies(mensalidade, taxa_selic) * duracao_curso - valor_financiado

    const meu_fies = `
    >>>>> AVALIAÇÃO FIES <<<<<
    Habilitação FIES: ${inscricao_fies}
    Valor a ser Financiado R$: ${valor_financiado}
    Valor Total dos juros R$: ${total_juros}
    Valor Total a pagar R$: ${total_a_pagar}
    Valor a ser pago durante Curso R$: ${valor_descontado}
    Valor a ser pago na Carência R$: ${pg_carencia}
    Valor da Parcela do Financiamento (após carência) R$: ${parcela_fies}
    Renda mínima ao iniciar o Pagamento do Financiamento R$: 
    Em que ano/semestre o aluno Iniciará e Concluirá o pagamento do FIES
    `
    print(meu_fies)
}

function calcular_valor_contratado_fies(mensalidade, taxa_selic) {
    const valor_contratado_ano = (mensalidade * 12) + (mensalidade * 12) * (taxa_selic / 100)
    return valor_contratado_ano
}

function calcular_pagamento_durante_curso(duracao_curso, valor_contratado_ano) {
    const qtd_meses = duracao_curso * 12
    const pagamento_fixo = (qtd_meses / 3) * 150
    const valor_descontado_divida = (valor_contratado_ano * duracao_curso) - pagamento_fixo 
    return valor_descontado_divida
}

function calcular_valor_pago_carencia() {
    const pagamento_carencia = 18 * 150
    return pagamento_carencia
}

function calcular_saldo_devedor(valor_contratado_ano, duracao_curso, pagamento_fixo, pagamento_carencia) {
    const saldo_devedor = (valor_contratado_ano * duracao_curso) - (pagamento_fixo + pagamento_carencia)
    return saldo_devedor
}

function parcelar_saldo_devedor(saldo_devedor, duracao_curso) {
    const numero_parcelas = 4 * duracao_curso
    const valor_parcela = saldo_devedor / numero_parcelas
    return valor_parcela
}

function calcular_parcela_fies_renda_aluno(renda_familiar) {
    const parcela_fies_aluno = renda_familiar * 0.1
    return parcela_fies_aluno
}

function verificar_inscricao_fies(renda_per_capita, salario_min) {
    if (renda_per_capita <= 3 * salario_min) {
        return 'APROVADO NO FIES!'
    } else {
        return 'REPROVADO NO FIES! Renda per capita maior que 3 salários mínimos'
    }
}

main()

