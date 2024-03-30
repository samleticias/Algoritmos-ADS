/*
Um posto está vendendo combustíveis com a seguinte tabela de descontos:
1. Álcool:
· até 20 litros, desconto de 3% por litro
· acima de 20 litros, desconto de 5% por litro
2. Gasolina:
· até 20 litros, desconto de 4% por litro
· acima de 20 litros, desconto de 6% por litro.
Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que
o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.
*/
import { question } from 'readline-sync'

function main() {
    const litrosVendidos = get_number('Digite o número de litros vendidos: ')
    const tipoCombustivel = question('Digite o tipo de combustível (A-álcool, G-gasolina): ').toUpperCase()

    const precoGasolina = 2.50
    const precoAlcool = 1.90

    const valorAPagar = calcular_valor_a_pagar(litrosVendidos, tipoCombustivel, precoGasolina, precoAlcool)

    console.log(`\nValor a ser pago: R$ ${valorAPagar.toFixed(2)}`)
}

function calcular_valor_a_pagar(litrosVendidos, tipoCombustivel, precoGasolina, precoAlcool) {
    let descontoPorLitro

    if (tipoCombustivel === 'A') {
        descontoPorLitro = litrosVendidos <= 20 ? 0.03 : 0.05
        return litrosVendidos * (precoAlcool - precoAlcool * descontoPorLitro)
    } else if (tipoCombustivel === 'G') {
        descontoPorLitro = litrosVendidos <= 20 ? 0.04 : 0.06
        return litrosVendidos * (precoGasolina - precoGasolina * descontoPorLitro)
    } else {
        console.log('Tipo de combustível inválido. Use A para álcool ou G para gasolina')
        return 0
    }
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()
