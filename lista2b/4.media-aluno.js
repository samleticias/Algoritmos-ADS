// Leia 2 (duas) notas parciais de um aluno, calcule a média e escreva a mensagem:
// o "Aprovado", se a média alcançada for maior ou igual a sete;
// o "Reprovado", se a média for menor do que sete;
// o "Aprovado com Distinção", se a média for igual a dez.
import { question } from 'readline-sync'

function main() {
    const n1 = get_number('Digite a 1ª nota: ')
    const n2 = get_number('Digite a 2ª nota: ')

    const resultado = calcular_media(n1, n2)
    console.log(resultado)
}

function calcular_media(n1, n2) {
    const media = (n1 + n2) / 2
    console.log(`MÉDIA = ${media.toFixed(2)}`)

    if (media >= 7.00) {
        if (media === 10.00) {
            return 'APROVADO COM DISTINÇÃO'
        } else {
            return 'APROVADO'
        }
    } else {
        return 'REPROVADO'
    }
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()

