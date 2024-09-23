import { question } from "readline-sync";

function main(){
    let idade = get_number('Idade: ')

    // 1. Estado anterior
    let quarto_atual = 0

    let soma_quartos_single = 0
    let soma_quartos_duplo = 0
    let soma_quartos_triplo = 0
    let soma_quartos_quadruplo = 0

    const valor_dia_single = 200
    const valor_dia_duplo = 280
    const valor_dia_triplo = 360
    const valor_dia_quadruplo = 200

    // 2. Condição de continuidade
    while (idade > 0 || (idade == 0 && quarto_atual > 0)){

        // 3. Trabalho
        if (idade > 0){
            quarto_atual++
        }

        if (idade == 0 || quarto_atual == 4){
            quarto_atual = 0
        }

        if (quarto_atual == 1){
            soma_quartos_single++
        } else if (quarto_atual == 2){
            soma_quartos_duplo++
        } else if (quarto_atual == 3){
            soma_quartos_triplo++
        } else {
            soma_quartos_quadruplo++
        }

        // 4. Convergência de dados
        idade = get_number('Idade: ')
    }

    // Ao final, pergunte para quantas noites será a reserva. Mostre então valor total por dia, e o valor
    // total da reserva para todos os dias. Informe que pagamento via PIX tem 5% de desconto (mostre
    // o valor). E no Crédito em até 3x é sem juros. E que pode parcelar de 3x a 12x, porém com Juros
    // Fixos Simples de 10,5% (mostre o valor).

    let qtd_noites = get_number('Quantidade de noites: ')
    
    let valor_diaria_single = obter_valor_dia(qtd_noites, valor_dia_single)
    let valor_diaria_duplo = obter_valor_dia(qtd_noites, valor_dia_duplo)
    let valor_diaria_triplo = obter_valor_dia(qtd_noites, valor_dia_triplo)
    let valor_diaria_quadruplo = obter_valor_dia(qtd_noites, valor_dia_quadruplo)


}

function obter_valor_dia(noites, valor_diaria){
    return noites * valor_diaria
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()