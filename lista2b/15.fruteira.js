/*
Uma fruteira está vendendo frutas com a seguinte tabela de preços:
Até 5 Kg Acima de 5 Kg
Morango R$ 2,50 por Kg R$ 2,20 por Kg
Maçã R$ 1,80 por Kg R$ 1,50 por Kg
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
*/
import {question} from 'readline-sync'

function main() {
    const kgMorango = get_number('Digite a quantidade (em Kg) de morangos: ')
    const kgMaca = get_number('Digite a quantidade (em Kg) de maçãs: ')

    const precoMorango = calcularPreco(kgMorango, 2.50, 2.20)
    const precoMaca = calcularPreco(kgMaca, 1.80, 1.50)

    let totalCompra = precoMorango + precoMaca

    if (kgMorango + kgMaca > 8 || totalCompra > 25.00) {
        const desconto = totalCompra * 0.10
        totalCompra -= desconto
        console.log(`\nDesconto de 10% aplicado: -R$ ${desconto.toFixed(2)}`)
    }

    console.log(`\nValor a ser pago: R$ ${totalCompra.toFixed(2)}`)
}

function calcularPreco(kg, precoAte5Kg, precoAcima5Kg) {
    if (kg <= 5) {
        return kg * precoAte5Kg
    } else {
        return kg * precoAcima5Kg
    }
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()

