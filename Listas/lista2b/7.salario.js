// As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe
// contrataram para desenvolver o programa que calculará os reajustes. Escreva um algoritmo que leia o
// salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// o salários até R$ 280,00 (incluindo) : aumento de 20%
// o salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// o salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// o salários de R$ 1500,00 em diante : aumento de 5% 
// Após o aumento ser realizado, informe na tela:
// · o salário antes do reajuste;
// · o percentual de aumento aplicado;
// · o valor do aumento;
// · o novo salário, após o aumento.
import {question} from 'readline-sync'

function main() {
    const salario = get_number('Digite o salário do colaborador: ')
    const resultadoReajuste = calcular_reajuste(salario)
    console.log(resultadoReajuste)
}

function calcular_reajuste(salario) {
    let percentualAumento, valorAumento, novoSalario

    if (salario <= 280.00) {
        percentualAumento = 20
    } else if (salario <= 700.00) {
        percentualAumento = 15
    } else if (salario <= 1500.00) {
        percentualAumento = 10
    } else {
        percentualAumento = 5
    }

    valorAumento = (salario * percentualAumento) / 100
    novoSalario = salario + valorAumento

    return `
        SALÁRIO ANTES DO REAJUSTE: R$${salario.toFixed(2)}
        PERCENTUAL DE AUMENTO APLICADO: ${percentualAumento}%
        VALOR DO AUMENTO: R$${valorAumento.toFixed(2)}
        NOVO SALÁRIO: R$${novoSalario.toFixed(2)}
    `
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()

