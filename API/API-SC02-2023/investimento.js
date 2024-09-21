import { question } from 'readline-sync'
import { get_number, print } from '../utils/io_utils.js'

function main(){
    // Mariana tem um dado objetivo com este investimento. Pergunte a ela qual o objetivo e de quanto ela precisa
    //para realizá-lo. Além disso, peça o salário, quanto(%) ela pretende
    //investir mensalmente e qual a taxa de juros do investimento escolhido. 
    const objetivo = question('Objetivo: ')
    const valor_necessario = get_number('Valor necessário para atingir objetivo R$: ')
    const salario = get_number('Salário R$: ')
    const porcentagem_salario = get_number('Porcentagem do salário a ser investida mensalmente (%): ')
    const taxa_juros_investimento = get_number('Taxa de juros escolhida para investimento (%): ')

    const parte_salario_investida = obter_parte_salario_investida(porcentagem_salario, salario)
    const meses = calcular_meses_retorno_investimento(valor_necessario, parte_salario_investida, taxa_juros_investimento)
    const duracao_investimento = verificar_duracao_meses_anos(meses)

    const resultado = `
    >>>>>>> INVESTIMENTO <<<<<<<
    ----------------------------
    Parte do Salário Investida Mensalmente: R$ ${parte_salario_investida.toFixed(2)}
    Meses Totais: ${meses} meses
    Duração do Investimento: ${duracao_investimento}
    `

    print(resultado)
}

function obter_parte_salario_investida(porcentagem_salario, salario){
    const parte_salario_investida = salario * (porcentagem_salario/100)
    return parte_salario_investida
}

function calcular_meses_retorno_investimento(valor_necessario, parte_salario_investida, taxa_juros_investimento){
    // O investimento escolhido rende mensalmente a uma taxa de juros de 0,01% até 1,00% sobre o saldo do mês. 
    let investimento_mensal = parte_salario_investida * taxa_juros_investimento
    let rendimento_mensal = 0
    let contador_meses = 0

    while(rendimento_mensal < valor_necessario){
         rendimento_mensal += investimento_mensal
         contador_meses++
         investimento_mensal = parte_salario_investida * taxa_juros_investimento
    }

    return contador_meses

}

function verificar_duracao_meses_anos(meses){
    // Se for acima de 12 meses mostre-o em anos e meses. 
    if (meses > 12){
        const anos = Math.floor(meses / 12)
        const meses_restantes =  meses % 12
        const duracao_anos_e_meses = `${anos} anos e ${meses_restantes} meses`
        return duracao_anos_e_meses
    } else {
        return `${meses} meses`
    }
}

main()