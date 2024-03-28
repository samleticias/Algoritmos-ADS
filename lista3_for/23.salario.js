/*
Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de
horas trabalhadas e o seu no de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$
40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR.
Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N
funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário
líquido do funcionário.
*/

import {get_number, print} from '../utils/io_utils.js'

function main(){
    let N_funcionarios = get_number('Número de funcionários: ')
    let total_funcionarios = 0
    let salario_bruto = 0
    let salario_liquido = 0

    for (let i = 1; i <= N_funcionarios; i++) {
        let codigo = get_number('Código: ')
        let horas_trabalhadas = get_number('Horas trabalhadas: ')
        let n_dependentes = get_number('Número de dependentes: ')
        total_funcionarios++

        salario_bruto = 12 * horas_trabalhadas + 40 * n_dependentes

        // sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR
        let desconto_inss = (8.5/100) * salario_bruto
        let desconto_ir = (5/100) * salario_bruto

        salario_liquido = salario_bruto - (desconto_inss + desconto_ir)

        // Após a leitura de cada ficha, 
        // escreva os valores descontados para cada imposto e o salário líquido do funcionário.
         print('>>>>> CONTRACHEQUE <<<<<')
         print('----------------------------------')
         print(`Salário Bruto: R$ ${salario_bruto.toFixed(2)}`)
         print(`INSS (8,5%): R$ ${desconto_inss.toFixed(2)}`)
         print(`IR (5%): R$ ${desconto_ir.toFixed(2)}`)
         print(`Salário Líquido: R$ ${salario_liquido.toFixed(2)}`)
         print('----------------------------------')

    }
}

main()