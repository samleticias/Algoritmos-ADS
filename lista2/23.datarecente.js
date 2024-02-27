// Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais
// recente.
import {question} from 'readline-sync'

function main() {
    let dia1 = get_number('Digite o dia da primeira data: ')
    let mes1 = get_number('Digite o mês da primeira data: ')
    let ano1 = get_number('Digite o ano da primeira data: ')

    let dia2 = get_number('Digite o dia da segunda data: ')
    let mes2 = get_number('Digite o mês da segunda data: ')
    let ano2 = get_number('Digite o ano da segunda data: ')

    let resultado = comparar_datas(dia1, mes1, ano1, dia2, mes2, ano2)

    console.log(resultado)
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

function comparar_datas(dia1, mes1, ano1, dia2, mes2, ano2) {
    if (ano1 > ano2) {
        return 'A primeira data é mais recente'
    } else if (ano2 > ano1) {
        return 'A segunda data é mais recente'
    } else {
        if (mes1 > mes2) {
            return 'A primeira data é mais recente'
        } else if (mes1 < mes2) {
            return 'A segunda data é mais recente'
        } else {
            if (dia1 > dia2) {
                return 'A primeira data é mais recente'
            } else if (dia1 < dia2) {
                return 'A segunda data é mais recente'
            } else {
                return 'As datas são iguais'
            }
        }
    }
}

main()
