import {question} from 'readline-sync'

function main() {
    const valorIphone = get_number("Informe o valor do iPhone R$: ")
    const formaPagamento = question("Informe a forma de pagamento (PIX, Espécie, Cartão de Débito, Cartão de Crédito): ")

    const result = calcula_forma_pagamento(valorIphone, formaPagamento)

    if (result) {
        const { valorFinal, tipoPagamento } = result

        console.log(`\nValor a ser pago: R$ ${valorFinal.toFixed(2)}`)
        
        if (tipoPagamento === 'credito') {
            const valorEntrada = get_number('Digite o valor que você vai dar de entrada R$: ')
            const parcelas = get_number('Em quantas parcelas você gostaria de dividir a compra? ')
            const { juros, valorTotal } = valor_cartao_credito(valorEntrada, parcelas)
            console.log(`\nVocê vai pagar ${juros.toFixed(2)}% de juros.`)
            console.log(`Valor total com juros: R$ ${valorTotal.toFixed(2)}`)
        } else {
            console.log(`Você vai economizar ${((valorIphone - valorFinal) / valorIphone * 100).toFixed(2)}%.`)
        }
    }
}

function calcula_forma_pagamento(valorIphone, formaPagamento) {
    let valorFinal
    let tipoPagamento

    if (formaPagamento.toLowerCase() === 'pix' || formaPagamento.toLowerCase() === 'espécie') {
        valorFinal = valorIphone - valorIphone * 0.15
        tipoPagamento = 'economizar'
    } else if (formaPagamento.toLowerCase() === 'cartão de débito') {
        valorFinal = valorIphone - valorIphone * 0.1
        tipoPagamento = 'economizar'
    } else if (formaPagamento.toLowerCase() === 'cartão de crédito') {
        valorFinal = valorIphone
        tipoPagamento = 'credito'
    } else {
        console.log("Forma de pagamento não identificada!")
        return null
    }

    return { valorFinal, tipoPagamento }
}

function valor_cartao_credito(valorEntrada, parcelas) {
    // Entrada + Cartão de Crédito em até 12x: 3,99% + 1,5% por parcela.
    const juros = 3.99 + (1.5 * parcelas)
    const valorTotal = valorEntrada + valorEntrada * (juros / 100) + (valorEntrada / parcelas) * parcelas

    return { juros, valorTotal }
}

function get_number(texto) {
    const input = question(texto)
    const numero = parseFloat(input.replace(',', '.'))
    return isNaN(numero) ? null : numero
}

main()

