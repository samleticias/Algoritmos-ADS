/*
Para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que
depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a
11% do salário bruto, mas não é descontado (é a empresa que deposita). O salário líquido corresponde
ao salário bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a
quantidade de horas trabalhadas no mês.
Desconto do IR:
o Salário Bruto até R$ 900,00 (inclusive) - isento
o Salário Bruto até R$ 1.500,00 (inclusive) - desconto de 5%
o Salário Bruto até R$ 2.500,00 (inclusive) - desconto de 10%
o Salário Bruto acima de R$ 2.500,00 - desconto de 20%
Escreva na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e
a quantidade de hora é 220.
Salário Bruto: (5 * 220) : R$ 1100,00
(-) IR (5%) : R$ 55,00
(-) INSS ( 10%) : R$ 110,00
FGTS (11%) : R$ 121,00
Total de descontos : R$ 165,00
Salário Liquido : R$ 935,00
*/

import {question} from 'readline-sync'

function main() {
    const valorHora = get_number('Digite o valor da sua hora de trabalho: ')
    const horasTrabalhadas = get_number('Digite a quantidade de horas trabalhadas no mês: ')

    const salarioBruto = calcular_salario_bruto(valorHora, horasTrabalhadas)
    const descontoIR = calcular_desconto_IR(salarioBruto)
    const descontoINSS = calcular_desconto_INSS(salarioBruto)
    const descontoTotal = descontoIR + descontoINSS
    const fgts = calcular_FGTS(salarioBruto);
    const salarioLiquido = salarioBruto - descontoTotal

    exibir_folha_pagamento(salarioBruto, descontoIR, descontoINSS, fgts, descontoTotal, salarioLiquido)
}

function calcular_salario_bruto(valorHora, horasTrabalhadas) {
    return valorHora * horasTrabalhadas
}

function calcular_desconto_IR(salarioBruto) {
    if (salarioBruto <= 900.00) {
        return 0
    } else if (salarioBruto <= 1500.00) {
        return salarioBruto * 0.05
    } else if (salarioBruto <= 2500.00) {
        return salarioBruto * 0.1
    } else {
        return salarioBruto * 0.2
    }
}

function calcular_desconto_INSS(salarioBruto) {
    return salarioBruto * 0.1
}

function calcular_FGTS(salarioBruto) {
    return salarioBruto * 0.11
}

function exibir_folha_pagamento(salarioBruto, descontoIR, descontoINSS, fgts, descontoTotal, salarioLiquido) {
    console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`)
    console.log(`(-) IR (${calcular_percentual(descontoIR, salarioBruto)}%): R$ ${descontoIR.toFixed(2)}`)
    console.log(`(-) INSS (10%): R$ ${descontoINSS.toFixed(2)}`)
    console.log(`FGTS (11%): R$ ${fgts.toFixed(2)}`)
    console.log(`Total de descontos: R$ ${descontoTotal.toFixed(2)}`)
    console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`)
}

function calcular_percentual(valor, total) {
    return ((valor / total) * 100).toFixed(2)
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()
