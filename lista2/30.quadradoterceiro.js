// Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos
// o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo
// milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste
// terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
// 2025 -> dividindo: 20 e 25 -> somando temos 45 -> 452 = 2025.
import {question} from 'readline-sync'

function main() {
    const n1 = get_number('Digite um número de 4 dígitos: ')

    if (verificar_caracteristica(n1)) {
        console.log(`O número ${n1} atende à característica`)
    } else {
        console.log(`O número ${n1} não atende à característica`)
    }
}

function verificar_caracteristica(n1) {
    const dezenaUnidade = n1 % 100
    const milharCentena = Math.floor(n1 / 100)

    const terceiroNumero = dezenaUnidade + milharCentena

    return Math.pow(terceiroNumero, 2) === n1
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()
