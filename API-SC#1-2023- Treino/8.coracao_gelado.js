import {question} from 'readline-sync'

function main() {
    const nome = question('Qual o seu nome? ')
    const idade = get_number('Quantos anos você tem? ')

    const fcm = obter_frequencia_cardiaca_maxima(idade)
    console.log(`Frequência Cardíaca Máxima (FCM): ${fcm} bpm`)

    console.log(obter_classificacao_frequencia_cardiaca(fcm)) 
}

function get_number(texto) {
    const input = question(texto)
    const numero = parseFloat(input.replace(',', '.'))
    return numero
}

function obter_classificacao_frequencia_cardiaca(fcm) {
    const fc_min_mtleve = fcm * 0.5
    const fc_max_mtleve = fcm * 0.6

    const fc_min_leve = fcm * 0.6
    const fc_max_leve = fcm * 0.7

    const fc_min_moderada = fcm * 0.7
    const fc_max_moderada = fcm * 0.8

    const fc_min_dificil = fcm * 0.8
    const fc_max_dificil = fcm * 0.9

    const fc_min_max = fcm * 0.9
    const fc_max_max = fcm * 1.0

    return `***** Classificação da Intensidade da Atividade Física *****
    Muito Leve (50-60%): ${fc_min_mtleve.toFixed(2)} até ${fc_max_mtleve.toFixed(2)}
    Leve (60-70%):       ${fc_min_leve.toFixed(2)} até ${fc_max_leve.toFixed(2)}
    Moderada (70-80%):   ${fc_min_moderada.toFixed(2)} até ${fc_max_moderada.toFixed(2)}
    Difícil (80-90%):    ${fc_min_dificil.toFixed(2)} até ${fc_max_dificil.toFixed(2)}
    Máxima (90-100%):    ${fc_min_max.toFixed(2)} até ${fc_max_max.toFixed(2)}`
}

function obter_frequencia_cardiaca_maxima(idade) {
    const fcm = 220 - idade
    return fcm
}

main()
