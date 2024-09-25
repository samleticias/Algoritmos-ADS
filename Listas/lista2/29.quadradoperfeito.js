// Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas
// formadas pelos seus dois primeiros e dois últimos dígitos.
// Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito.
// Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.
import {question} from 'readline-sync'

function main() {
    const n1 = get_number('Digite um número de 4 dígitos: ')

    const { milhar, centena, dezena, unidade } = verificar_dezena(n1)

    const resultado = calcular_quadrado_perfeito(n1, milhar, centena, dezena, unidade)

    console.log(resultado)
}

function verificar_dezena(n1) {
    const milhar = Math.floor(n1 / 1000)
    const centena = Math.floor((n1 % 1000) / 100)
    const dezena = Math.floor((n1 % 100) / 10)
    const unidade = n1 % 10

    return { milhar, centena, dezena, unidade }
}

function calcular_quadrado_perfeito(n1, milhar, centena, dezena, unidade) {
    if (Math.sqrt(n1) === (milhar * 10 + centena) + (dezena * 10 + unidade)) {
        return `O número ${n1} é um quadrado perfeito`
    } else {
        return `O número ${n1} não é um quadrado perfeito`
    }
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()
