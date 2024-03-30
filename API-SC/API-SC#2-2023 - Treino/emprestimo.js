import { get_number, print } from '../utils/io_utils.js'

function main(){
    // Peça ao usuário Renda Mensal, Valor Empréstimo e Prazo desejados, valide os dados a serem recebidos.
    const renda_mensal = get_number('Renda Mensal R$: ')
    const valor_emprestimo = get_number('Valor Empréstimo R$: ')
    const prazo = get_number('Prazo (em meses): ')
    const salario_minimo_vigente = get_number('Salário Mínimo Vigente R$: ')
    const taxa_selic = 0.1375 // 13.75%

    const iof = obter_imposto_iof(valor_emprestimo, prazo)
    const taxa_juros = obter_taxa_com_prazo(prazo, taxa_selic)
    const valor_total_juros = obter_total_juros_compostos(valor_emprestimo, iof, taxa_juros, prazo)
    const valor_parcela = obter_valor_parcelas(valor_emprestimo, prazo, valor_total_juros)
    const valor_total_a_pagar = valor_parcela * prazo + valor_total_juros
    const percentual_parcela_na_renda = obter_parcela_na_renda_mensal(valor_parcela, renda_mensal)
    const valor_max_parcela = obter_valor_maximo_parcela(renda_mensal, valor_parcela)

    const resultado = `
    --------------------------------------------------------------------------------
    Valor Pedido: R$ ${valor_emprestimo.toFixed(2)}
    Valor do IOF: R$ ${iof.toFixed(2)}
    Valor dos Juros a pagar: R$ ${valor_total_juros.toFixed(2)}
    Valor Total a pagar: R$ ${valor_total_a_pagar.toFixed(2)}
    Valor da Parcela Mensal: ${prazo}x de R$ ${valor_parcela.toFixed(2)}
    Comprometimento da Renda Mensal (%): ${percentual_parcela_na_renda.toFixed(2)}
    Se Empréstimo APROVADO ou NEGADO (se a renda mensal suporta a parcela): ${valor_max_parcela}
    --------------------------------------------------------------------------------
    `
    print(resultado)

}

function obter_parcela_na_renda_mensal(valor_parcela, renda_mensal){
    const percentual_parcela_na_renda = (valor_parcela / renda_mensal) * 100
    return percentual_parcela_na_renda
}

function obter_imposto_iof(valor_emprestimo, prazo){
   const dias_do_prazo = prazo * 30
   const valor_iof = (0.38/100) * valor_emprestimo + (0.0082/100) * dias_do_prazo
   return valor_iof
}

function obter_valor_parcelas(valor_emprestimo, prazo, valor_total_juros){
    const parcela = (valor_emprestimo + valor_total_juros) / prazo
    return parcela
}

function obter_total_juros_compostos(valor_emprestimo, iof, taxa_juros, prazo){
    /*
     regra dos Juros Compostos Mensais, ou seja, o valor é
     calculado cumulativamente mês a mês, ou seja, aplica-se os juros
     sobre o valor total no primeiro mês e esse passa a ser a base para o
     segundo mês.
     Os juros são aplicados sobre o valor a ser recebido pelo Cliente + IOF
     */
    const taxa_juros_fracao = taxa_juros / 100
    const montante = (valor_emprestimo + iof) * Math.pow((1 + taxa_juros_fracao), prazo)
    const valor_juros_total = montante - (valor_emprestimo + iof)
    return valor_juros_total

}



function obter_taxa_com_prazo(prazo, taxa_selic){
   let taxa_juros = 0
   if (prazo <= 6){
    taxa_juros = 0.5 * taxa_selic // Até 6x 50% da SELIC
   } else if (prazo < 12){
    taxa_juros = 0.75 * taxa_selic // de 7x a 12x 75% da SELIC
   } else if (prazo < 18){
    taxa_juros = 1.0 * taxa_selic // de 12x a 18x 100% da SELIC
   } else {
    taxa_juros = 1.3 * taxa_selic // Acima de 18x 130% da SELIC
   }
   return taxa_juros
}

function verificar_prazo_emprestimo(prazo){
    /*
    O usuário só pode parcelar o empréstimo em até 24x
    (min. 2 parcelas). Valor mínimo de empréstimo é de um salário
    mínimo. Valor máximo de parcela é 40% da Renda Mensal do
    Cliente. 
    */
   if (prazo >= 2 && prazo <= 24){
    return 'PARCELAMENTO AUTORIZADO!'
   } else {
    return 'PARCELAMENTO NEGADO! Mínimo: 2x e Máximo: 24x'
   }

}

function verificar_valor_minimo_emprestimo(valor_emprestimo, salario_minimo_vigente){
    // Valor mínimo de empréstimo é de um salário mínimo. Valor máximo de parcela é 40% da Renda Mensal do Cliente.
    if (valor_emprestimo < salario_minimo_vigente){
        return 'VALOR MÍNIMO INSUFICIENTE'
    } else {
        return 'VALOR MÍNIMO AUTORIZADO'
    }
}

function obter_valor_maximo_parcela(renda_mensal, valor_parcela){
    // Valor máximo de parcela é 40% da Renda Mensal do Cliente.
    const valor_maximo_de_parcela = 0.4 * renda_mensal
    if (valor_parcela < valor_maximo_de_parcela){
        return 'VALOR MÁXIMO DE PARCELA AUTORIZADO!'
    } else {
        return 'VALOR MÁXIMO DE PARCELA NEGADO!'
    }
}

main()