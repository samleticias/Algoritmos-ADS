// Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.
import { question } from 'readline-sync'

function main() {
    var dia = get_number('Digite o dia:')
    var mes = get_number('Digite o mês:')
    var ano = get_number('Digite o ano:')

    if (verificar_data(dia, mes, ano)) {
        console.log('A data é válida')
    } else {
        console.log('A data não é válida')
    }
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

function verificar_data(dia, mes, ano) {
    if (ano < 1900 || ano > 2100) {
        return false
    }

    if (mes < 1 || mes > 12) {
        return false
    }

    const dias_no_mes = new Date(ano, mes, 0).getDate()
    if (dia < 1 || dia > dias_no_mes) {
        return false
    }

    return true
}

main()
