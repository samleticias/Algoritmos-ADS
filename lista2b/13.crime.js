/*
Faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
a) "Telefonou para a vítima ?"
b) "Esteve no local do crime ?"
c) "Mora perto da vítima ?"
d) "Devia para a vítima ?"
e) "Já trabalhou com a vítima ?"
O algoritmo deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa
responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como
"Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
*/

import {question} from 'readline-sync'

function main() {
    console.log('Responda as perguntas com "Sim" ou "Não".\n')

    const respostas = {
        a: question('a) Telefonou para a vítima? ').toLowerCase(),
        b: question('b) Esteve no local do crime? ').toLowerCase(),
        c: question('c) Mora perto da vítima? ').toLowerCase(),
        d: question('d) Devia para a vítima? ').toLowerCase(),
        e: question('e) Já trabalhou com a vítima? ').toLowerCase(),
    }

    const classificacao = classificarParticipacao(respostas)
    console.log(`\nClassificação: ${classificacao}`)
}

function classificarParticipacao(respostas) {
    const positivas = Object.values(respostas).filter(resposta => resposta === 'sim').length

    if (positivas === 2) {
        return 'Suspeita'
    } else if (positivas >= 3 && positivas <= 4) {
        return 'Cúmplice'
    } else if (positivas === 5) {
        return 'Assassino'
    } else {
        return 'Inocente'
    }
}

main()
