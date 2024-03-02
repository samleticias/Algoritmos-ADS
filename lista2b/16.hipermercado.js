/*
O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
Até 5 Kg Acima de 5 Kg
File R$ 4,90 por Kg R$ 5,80 por Kg
Alcatra R$ 5,90 por Kg R$ 6,80 por Kg
Picanha R$ 6,90 por Kg R$ 7,80 por Kg
Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção,
porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o
cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um programa que peça o tipo
e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da
compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.
*/

import {question} from 'readline-sync'

function main() {
    const tipoCarne = selecionar_tipo_carne()
    const quantidade = get_number('Digite a quantidade (em Kg) de carne: ')
    const cartaoTabajara = question('A compra será feita com o cartão Tabajara? (Digite "Sim" ou "Não"): ').toLowerCase() === 'sim'

    const precoTotal = calcular_preco_total(tipoCarne, quantidade)
    const desconto = cartaoTabajara ? precoTotal * 0.05 : 0
    const valorAPagar = precoTotal - desconto

    gerar_cupom_fiscal(tipoCarne, quantidade, precoTotal, cartaoTabajara, desconto, valorAPagar)
}

function selecionar_tipo_carne() {
    console.log('Tipos de carne disponíveis: File, Alcatra, Picanha')
    const tipoCarne = question('Digite o tipo de carne desejado: ').toLowerCase()

    if (tipoCarne === 'file' || tipoCarne === 'alcatra' || tipoCarne === 'picanha') {
        return tipoCarne
    } else {
        console.log('Tipo de carne inválido')
        return selecionar_tipo_carne()
    }
}

function calcular_preco_total(tipoCarne, quantidade) {
    const precos = {
        file: quantidade <= 5 ? 4.90 : 5.80,
        alcatra: quantidade <= 5 ? 5.90 : 6.80,
        picanha: quantidade <= 5 ? 6.90 : 7.80,
    }

    return quantidade * precos[tipoCarne]
}

function gerar_cupom_fiscal(tipoCarne, quantidade, precoTotal, cartaoTabajara, desconto, valorAPagar) {
    console.log('\nCupom Fiscal:')
    console.log(`Tipo de Carne: ${tipoCarne}`)
    console.log(`Quantidade: ${quantidade} Kg`)
    console.log(`Preço Total: R$ ${precoTotal.toFixed(2)}`)
    console.log(`Tipo de Pagamento: ${cartaoTabajara ? 'Cartão Tabajara' : 'Dinheiro'}`)
    console.log(`Desconto: R$ ${desconto.toFixed(2)}`)
    console.log(`Valor a Pagar: R$ ${valorAPagar.toFixed(2)}`)
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()

