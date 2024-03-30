/*
Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de
horas trabalhadas e o seu no de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$
40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR.
Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N
funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário
líquido do funcionário.
*/
import { get_number, print } from '../utils/io_utils.js'

function main(){
    let N_funcionarios = get_number('Número de funcionários: ')
    let contador = 0
    const valor_hora = 12
    const valor_dependente = 40
    let salario_bruto = 0
    let salario_liquido = 0
    // 8,5% para o INSS e 5% para IR
    const inss = 8.5 / 100
    const ir = 5 / 100

    while (contador < N_funcionarios){
        let codigo = get_number('Código: ')
        let n_horas_trabalhadas = get_number('Número de horas trabalhadas: ')
        let n_dependentes = get_number('Número de dependentes: ')

        salario_bruto = (n_horas_trabalhadas * valor_hora) + (n_dependentes * valor_dependente)

        let desconto_inss = salario_bruto * inss
        let desconto_ir = salario_bruto * ir

        salario_liquido = salario_bruto - desconto_inss - desconto_ir

        // Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário líquido do funcionário.

        print('>>>>>>> CONTRACHEQUE <<<<<<<<')
        print('------------------------------')
        print(`INSS (8.5%): ${desconto_inss.toFixed(2)}`)
        print(`IR (5%): ${desconto_ir.toFixed(2)}`)
        print(`Salário Líquido R$: ${salario_liquido.toFixed(2)}`)
        print('------------------------------')

        contador++
    }
}

main()