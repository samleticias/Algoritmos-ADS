// 19. Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
// (IMC = peso / altura2). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso
// (IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).
import { question } from 'readline-sync'

function main() {
    const altura = get_number('Digite a altura (em metros): ')
    const peso = get_number('Digite o peso (em Kg): ')

    const imc = calcular_imc(peso, altura)
    const situacao = verificar_situacao(imc)

    console.log(`O IMC calculado é: ${imc.toFixed(2)}`)
    console.log(`Situação: ${situacao}`)
}

function calcular_imc(peso, altura) {
    return peso / (altura ** 2)
}

function verificar_situacao(imc) {
    if (imc < 25) {
        return 'Peso normal'
    } else if (imc >= 25 && imc <= 30) {
        return 'Obeso'
    } else {
        return 'Obesidade mórbida'
    }
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()