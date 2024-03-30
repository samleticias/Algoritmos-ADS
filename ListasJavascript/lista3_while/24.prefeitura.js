/*
A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e
número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e
escreva:
a) média de salário da população;
b) média de número de filhos;
c) percentual de pessoas com salário de até R$ 1.000,00.
*/
import { get_number, print } from '../utils/io_utils.js'

function main(){
    let N_habitantes = get_number('Número de habitantes: ')
    let contador = 0
    let soma_salarios_populacao = 0
    let soma_filhos_populacao = 0
    let quantidade_pessoas_salario_ate_mil = 0

    while (contador < N_habitantes){
        let salario = get_number('Salário R$: ')
        let numero_filhos = get_number('Número de filhos: ')
        soma_filhos_populacao += numero_filhos
        soma_salarios_populacao += salario

        if (salario <= 1000){
            quantidade_pessoas_salario_ate_mil++
        }

        contador++
    }

    // a) média de salário da população;
    const media_salario_populacao = soma_salarios_populacao / N_habitantes

    // b) média de número de filhos;
    const media_numero_filhos = soma_filhos_populacao / N_habitantes

    // c) percentual de pessoas com salário de até R$ 1.000,00.
    const percentual_pessoas_salario_ate_mil = (quantidade_pessoas_salario_ate_mil / N_habitantes) * 100

    print('------------------------------------------------------------------')
    print(`Média de salário da população: ${media_salario_populacao.toFixed(2)}`)
    print(`Média de número de filhos: ${media_numero_filhos.toFixed(2)}`)
    print(`Percentual de pessoas com salário de até R$ 1.000,00: ${percentual_pessoas_salario_ate_mil.toFixed(2)}%`)
    print('------------------------------------------------------------------')
    
}

main()