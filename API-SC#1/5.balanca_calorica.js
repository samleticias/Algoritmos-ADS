import {question} from 'readline-sync'

function calcula_necessidade_calorica(sexo, idade, peso, altura, perfilAtividade) {
    let necessidadeCalorica

    if (sexo.toLowerCase() === 'homem') {
        necessidadeCalorica = 662 - (9.53 * idade) + perfilAtividade * (15.91 * peso) + (539.6 * altura)
    } else if (sexo.toLowerCase() === 'mulher') {
        necessidadeCalorica = 354 - (6.91 * idade) + perfilAtividade * (9.36 * peso) + (726 * altura)
    } else {
        console.log("Sexo não identificado!")
        return null
    }

    return necessidadeCalorica
}

function calcula_nova_dieta(ingestaoCalorica, objetivo, quantidadeKg, semanas) {
    const caloriasPorSemana = quantidadeKg * 7700
    const caloriasDiariasAdicionais = caloriasPorSemana / semanas

    if (objetivo.toLowerCase() === 'ganhar') {
        return ingestaoCalorica + caloriasDiariasAdicionais
    } else if (objetivo.toLowerCase() === 'perder') {
        return ingestaoCalorica - caloriasDiariasAdicionais
    } else {
        console.log("Objetivo não reconhecido!")
        return null
    }
}

function calcula_distribuicao_proporcional(novaDietaCalorica) {
    const proteinas = 0.4 * novaDietaCalorica / 4
    const carboidratos = 0.4 * novaDietaCalorica / 4
    const gorduras = 0.2 * novaDietaCalorica / 9

    return { proteinas, carboidratos, gorduras }
}

function get_number(texto) {
    const input = question(texto)
    const numero = parseFloat(input.replace(',', '.'))
    return isNaN(numero) ? null : numero
}


function main() {
    const nome = question("Digite seu nome: ")
    const sexo = question("Digite seu sexo (Homem/Mulher): ")
    const idade = get_number("Digite sua idade: ")
    const peso = get_number("Digite seu peso em kg: ")
    const altura = get_number("Digite sua altura em metros: ")
    const perfilAtividade = get_number("Digite seu perfil de atividade física (1.0 para sedentário, 1.11 para pouco ativo, 1.25 para ativo, 1.48 para muito ativo): ")

    const necessidadeCalorica = calcula_necessidade_calorica(sexo, idade, peso, altura, perfilAtividade)

    if (necessidadeCalorica !== null) {
        console.log(`\nSua Necessidade Calórica Diária para manter o peso é: ${necessidadeCalorica.toFixed(2)} kcal\n`)

        const objetivo = question("Você quer Ganhar ou Perder peso? ")
        const quantidadeKg = get_number("Quantos quilos você deseja ganhar ou perder? ")
        const semanas = get_number("Em quantas semanas? ")

        const novaDietaCalorica = calcula_nova_dieta(necessidadeCalorica, objetivo, quantidadeKg, semanas)

        if (novaDietaCalorica !== null) {
            console.log(`\nVocê deve consumir ${novaDietaCalorica.toFixed(2)} kcal diárias durante o plano de dieta`)
            
            const { proteinas, carboidratos, gorduras } = calcula_distribuicao_proporcional(novaDietaCalorica)
            console.log("Distribuição Proporcional da Nova Dieta:")
            console.log(`Proteínas: ${proteinas.toFixed(2)}g (40%)`)
            console.log(`Carboidratos: ${carboidratos.toFixed(2)}g (40%)`)
            console.log(`Gorduras: ${gorduras.toFixed(2)}g (20%)\n`)

        }
    }
}

main()
