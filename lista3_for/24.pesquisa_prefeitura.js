/*
A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e
número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e
escreva:
a) média de salário da população;
b) média de número de filhos;
c) percentual de pessoas com salário de até R$ 1.000,00.
*/
import {get_number, print} from '../utils/io_utils.js'

function main(){
    let N_habitantes = get_number('Digite a quantidade de habitantes entrevistados: ')
    let soma_salarios_populacao = 0
    let total_entrevistados = 0
    let soma_filhos_populacao = 0
    let soma_pessoas_salario_ate_mil = 0

    for (let i = 1; i <= N_habitantes; i++) {
        let salario = get_number('Salário R$: ')
        let numero_filhos = get_number('Número de filhos: ')
        total_entrevistados++
        soma_filhos_populacao += numero_filhos
        soma_salarios_populacao += salario

        if (salario <= 1000){
            soma_pessoas_salario_ate_mil++
        }

    }

    // a) média de salário da população;
    const media_salario_populacao = soma_salarios_populacao / total_entrevistados

    // b) média de número de filhos;
    const media_numero_filhos = soma_filhos_populacao / total_entrevistados

    // c) percentual de pessoas com salário de até R$ 1.000,00.
    const percentual_pessoas_salario_ate_mil = (soma_pessoas_salario_ate_mil / total_entrevistados) * 100

    print('>>>>>>>>>> ENTREVISTA <<<<<<<<<< ')
    print('------------------------------------------------------------------')
    print(`Média de salário da população R$: ${media_salario_populacao.toFixed(2)}`)
    print(`Média de número de filhos: ${media_numero_filhos.toFixed(2)}`)
    print(`Percentual de pessoas com salário de até R$ 1.000,00 (%): ${percentual_pessoas_salario_ate_mil.toFixed(2)}`)
    print('------------------------------------------------------------------')
}

main()