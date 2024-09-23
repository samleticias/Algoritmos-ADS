/*
Leia as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a
sua média. A atribuição de conceitos obedece à tabela abaixo:
Média de Aproveitamento Conceito
Entre 9.0 e 10.0 A
Entre 7.5 e 9.0 B
Entre 6.0 e 7.5 C
Entre 4.0 e 6.0 D
Entre 4.0 e zero E
O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem
“APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.
*/
import { question } from 'readline-sync'

function main() {
    const n1 = get_number('Digite a 1ª nota: ')
    const n2 = get_number('Digite a 2ª nota: ')

    const conceito = calcular_media(n1, n2)
    exibir_resultado(conceito, n1, n2)
}

function calcular_media(n1, n2) {
    const media = (n1 + n2) / 2

    if (media >= 0 && media < 4.00) {
        return 'Conceito E'
    } else if (media >= 4.00 && media < 6.00) {
        return 'Conceito D'
    } else if (media >= 6.00 && media < 7.50) {
        return 'Conceito C'
    } else if (media >= 7.50 && media < 9.00) {
        return 'Conceito B'
    } else {
        return 'Conceito A'
    }
}

function exibir_resultado(conceito, n1, n2) {
    console.log(`1ª NOTA: ${n1.toFixed(2)}`)
    console.log(`2ª NOTA: ${n2.toFixed(2)}`)
    console.log(`MÉDIA: ${((n1 + n2) / 2).toFixed(2)}`)
    console.log(`CONCEITO: ${conceito}`)

    if (conceito === 'Conceito A' || conceito === 'Conceito B' || conceito === 'Conceito C') {
        console.log('APROVADO')
    } else {
        console.log('REPROVADO')
    }
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()

