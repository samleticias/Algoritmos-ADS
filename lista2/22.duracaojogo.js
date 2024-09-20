// Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:
// hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo
// máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia
// seguinte.

import {question} from 'readline-sync'

function main() {
    let horaInicio = get_number('Hora início: ')
    let minutoInicio = get_number('Minuto início: ')
    let horaFim = get_number('Hora fim: ')
    let minutoFim = get_number('Minuto fim: ')

    let duracaoJogo = calcular_duracao_jogo(horaInicio, minutoInicio, horaFim, minutoFim)
    console.log(`Duração do jogo: ${duracaoJogo.horas} horas e ${duracaoJogo.minutos} minutos`)
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

function calcular_duracao_jogo(horaInicio, minutoInicio, horaFim, minutoFim) {
    let inicioTotalMinutos = horaInicio * 60 + minutoInicio
    let fimTotalMinutos = horaFim * 60 + minutoFim

    if (fimTotalMinutos < inicioTotalMinutos) {
        fimTotalMinutos += 24 * 60
    }

    let duracaoTotalMinutos = fimTotalMinutos - inicioTotalMinutos;

    let duracaoHoras = Math.floor(duracaoTotalMinutos / 60)
    let duracaoMinutos = duracaoTotalMinutos % 60

    return { horas: duracaoHoras, minutos: duracaoMinutos }
}

main()


