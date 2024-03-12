import { get_positive_number, print } from '../utils/io_utils.js'

 function main(){
    // Duração do curso em anos (ex.: 4 ou 2.5);
    // Valor Mensalidade;
    // Taxa SELIC e Salário mínimo vigentes;
    // Renda Familiar em (R$) e Quantas Pessoas na família;
    // Ano e Semestre de Início;
    const duracao_curso = get_positive_number('Duração do curso (em anos): ')
    const mensalidade = get_positive_number('Valor Mensalidade R$: ')
    const taxa_selic = get_positive_number('Taxa SELIC (%): ')
    const salario_min = get_positive_number('Salário Mínimo Vigente R$: ')
    const renda_familiar = get_positive_number('Renda Familiar R$: ')
    const qtd_membros_familia = get_positive_number('Quantidade de Membros da Família: ')

    const renda_per_capita = renda_familiar / qtd_membros_familia
    const valor_descontado = calcular_pagamento_durante_curso(duracao_curso, valor_contratado_ano)
    const pg_carencia = calcular_valor_pago_carencia()
    const saldo_devedor_final = calcular_saldo_devedor(valor_contratado_ano, duracao_curso, pagamento_fixo, pagamento_carencia)
    const valor_parcelas = parcelar_saldo_devedor(saldo_devedor_final, duracao_curso)
    const parcela_fies = calcular_parcela_fies_renda_aluno(renda_familiar)
    const inscricao_fies = verificar_inscricao_fies(renda_per_capita, salario_min)
    const valor_contratado_anual = calcular_valor_contratado_fies(taxa_selic, mensalidade)
    const valor_financiado = valor_contratado_anual * duracao_curso
    const total_a_pagar = valor_financiado + valor_descontado + pg_carencia + valor_parcelas + parcela_fies

    const meu_fies = `
    >>>>> AVALIAÇÃO FIES <<<<<
    Habilitação FIES: ${inscricao_fies}
    Valor a ser Financiado R$: ${valor_financiado}
    Valor Total dos juros R$: 
    Valor Total a pagar R$: ${total_a_pagar}
    Valor a ser pago durante Curso R$: ${valor_descontado}
    Valor a ser pago na Carência R$: ${pg_carencia}
    Valor da Parcela do Financiamento (após carência) R$: ${parcela_fies}
    Renda mínima ao iniciar o Pagamento do Financiamento R$: 
    Em que ano/semestre o aluno Iniciará e Concluirá o pagamento do FIES

    `
    print(meu_fies)

 }

 function calcular_valor_contratado_fies(taxa_selic, mensalidade){
    // serão aplicados 10% sempre sobre o valor original contratado para cada ano. 
    // Ou seja, o valor a ser pago será acrescido de 10% do valor original mais o valor original;

    const valor_contratado_ano = (mensalidade * 12) + (mensalidade * 12) * (taxa_selic/100)
    return valor_contratado_ano

 }

 function calcular_taxa_juros_fies(renda_per_capita, salario_min, taxa_selic){
    // Neste caso, assume-se que a taxa de juros FIES seguirá a seguinte regra, baseada na renda per capita familiar (salário mínimo):
    //De 0 e Até 1,5 salários → 10% da SELIC; 
    //Acima de 1,5 até 2 salários → 15% da SELIC;
    //Acima de 2 até 2,5 salários → 20% da SELIC; e
    //Acima de 2,5 salários → 25% da SELIC.

    if (renda_per_capita <= (1.5 * salario_min)) {
        return 0.1 * (taxa_selic/100)
    } else if (renda_per_capita <= (2 * salario_min)) {
        return 0.15 * (taxa_selic/100)
    } else if (renda_per_capita <= (2.5 * salario_min)) {
        return 0.20 * (taxa_selic/100)
    } else {
        return 0.25 * (taxa_selic/100)
    }
 }

 function verificar_inscricao_fies(renda_per_capita, salario_min){
    // Para ser aprovado no FIES a renda familiar deve ser de até 3 salários mínimos por pessoa.
    if (renda_per_capita <= (3 * salario_min)){
        return 'APROVADO NO FIES!'
    } else {
        return 'REPROVADO NO FIES! Renda per capita maior que 3 salários mínimos'
    }
 }

 function calcular_pagamento_durante_curso(duracao_curso, valor_contratado_ano){
    // Durante o curso o aluno não paga o FIES mas pagará uma parcela fixa de R$ 150 a cada 3 meses (que é descontado dos Juros da dívida).
    const qtd_meses = duracao_curso * 12
    const pagamento_fixo = (qtd_meses / 3) * 150
    const valor_descontado_divida = (valor_contratado_ano * duracao_curso) - pagamento_fixo 
    return valor_descontado_divida

 }

 function calcular_valor_pago_carencia(){
    // Após o curso, durante ainda 18 meses o aluno também pagará a apenas a mesma taxa de R$ 150, esse período chama-se carência;
    const pagamento_carencia = 18 * 150
    return pagamento_carencia
 }

 function calcular_saldo_devedor(valor_contratado_ano, duracao_curso, pagamento_fixo, pagamento_carencia){
    // Após a carência o saldo devedor (original + juros - pagamentos de R$ 150) será parcelado em até 4x a duração do Curso.
    const saldo_devedor = (valor_contratado_ano * duracao_curso) - (pagamento_fixo + pagamento_carencia)
    return saldo_devedor
 }


 function parcelar_saldo_devedor(saldo_devedor, duracao_curso){
    const numero_parcelas = 4 * duracao_curso
    const valor_parcela = saldo_devedor / numero_parcelas
    return valor_parcela
 }

 function calcular_parcela_fies_renda_aluno(renda_familiar){
    // O valor da Parcela do FIES deve ser no máximo 10% da renda do aluno quando ele já estiver trabalhando;
    const parcela_fies_aluno = renda_familiar * 0.1

 }

 main()