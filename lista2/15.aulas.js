// Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
// Escreva na tela qual dos professores tem salário total maior.

import {question} from 'readline-sync'

function main(){
    const horas_p1 = get_number('Quantidade de horas-aula dadas pelo 1o professor: ')
    const horas_p2 = get_number('Quantidade de horas-aula dadas pelo 2o professor: ')
    const valor_p1 = get_number('Valor por hora da aula do 1o professor: ')
    const valor_p2 = get_number('Valor por hora da aula do 1o professor: ')

    const valor_salario = calcular_salario(horas_p1, horas_p2, valor_p1, valor_p2)
    const maior_salario = verificar_salario(horas_p1, horas_p2, valor_p1, valor_p2)

}

function calcular_salario(horas_p1, horas_p2, valor_p1, valor_p2){
    const salario_p1 = horas_p1 * valor_p1
    const salario_p2 = horas_p2 * valor_p2
    
    console.log(`O salário do 1o professor é R$${salario_p1.toFixed(2)}`)
    console.log(`O salário do 2o professor é R$${salario_p2.toFixed(2)}`)

}

function verificar_salario(salario_p1, salario_p2){
    if (salario_p1 > salario_p2){
        console.log('O 1o professor tem o maior salário.')
    } else {
        console.log('O 2o professor tem o maior salário')
    }
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()