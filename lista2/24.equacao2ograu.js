// Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o
// coeficiente A deve ser diferente de 0 (zero).
// AX**2 + BX + C = 0
// delta = B**2 - 4AC
// X1 = (-B + mathsqrt(delta)) / 2A
// X2 = (-B - mathsqrt(delta)) / 2A

import { question } from 'readline-sync'

function main() {
    const coeficienteA = get_number('Coeficiente A: ')
    const coeficienteB = get_number('Coeficiente B: ')
    const coeficienteC = get_number('Coeficiente C: ')

    let raizes = calcular_raizes(coeficienteA, coeficienteB, coeficienteC)
    console.log(raizes)
}

function calcular_raizes(coeficienteA, coeficienteB, coeficienteC) {
    if (coeficienteA !== 0) {
        let delta = Math.pow(coeficienteB, 2) - 4 * coeficienteA * coeficienteC
        if (delta > 0) {
            let x1 = (-coeficienteB + Math.sqrt(delta)) / (2 * coeficienteA)
            let x2 = (-coeficienteB - Math.sqrt(delta)) / (2 * coeficienteA)
            return `Delta: ${delta}, X1: ${x1}, X2: ${x2}`
        } else if (delta === 0) {
            let x = -coeficienteB / (2 * coeficienteA)
            return `Delta: ${delta}, X: ${x}`
        } else {
            return 'A equação não possui raízes reais (Delta negativo)'
        }
    }
    else {
        return 'O coeficiente de A deve ser diferente de zero para calcular as raízes'
    }
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()
