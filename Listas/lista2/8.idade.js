// Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
// sua idade exata (em anos).
import { question } from 'readline-sync'

function main() {
    var dia = get_number('Digite o dia de nascimento:')
    var mes = get_number('Digite o mês de nascimento:')
    var ano = get_number('Digite o ano de nascimento:')

    var idade = calcular_idade(dia, mes, ano)
    console.log("Idade atual: " + idade + " anos")
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

function calcular_idade(dia, mes, ano) {
    var data_atual = new Date()
    var idade = data_atual.getFullYear() - ano

    if (
        (mes > data_atual.getMonth() + 1) ||
        (mes === data_atual.getMonth() + 1 && dia > data_atual.getDate())
    ) {
        idade--
    }

    return idade
}

main()
