// 17. Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1
// escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor
// são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4
// divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação
// escreva o quadrado dos números lidos.

import { question } from 'readline-sync'

function main() {
    const n1 = get_number('1o valor: ')
    const n2 = get_number('2o valor: ')

    const resto = calcular_divisao(n1, n2)

    if (resto === 1) {
        const resultado = n1 + n2 + (n1 % n2)
        console.log(`A soma dos valores mais o resto da divisão é ${resultado}`)
    } else if (resto === 2) {
        if (n1 % 2 === 0 && n2 % 2 === 0) {
            console.log(`${n1} e ${n2} são pares`);
        } else if (n1 % 2 === 0 && n2 % 2 !== 0) {
            console.log(`${n1} é par e ${n2} é ímpar`)
        } else if (n1 % 2 !== 0 && n2 % 2 === 0) {
            console.log(`${n1} é ímpar e ${n2} é par`)
        } else {
            console.log(`${n1} e ${n2} são ímpares`)
        }
    } else if (resto === 3) {
        const resultado = (n1 + n2) * n1
        console.log(`A multiplicação da soma pelo primeiro valor é ${resultado}`)
    } else if (resto === 4) {
        if (n2 !== 0) {
            const resultado = (n1 + n2) / n2
            console.log(`A divisão da soma pelo segundo valor é ${resultado}`)
        } else {
            console.log('Não é possível dividir por zero.')
        }
    } else {
        const quadrado_n1 = Math.pow(n1, 2)
        const quadrado_n2 = Math.pow(n2, 2)
        console.log(`Os quadrados de ${n1} e ${n2} são respectivamente ${quadrado_n1} e ${quadrado_n2}.`)
    }
}

function calcular_divisao(n1, n2) {
    return n1 % n2
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()