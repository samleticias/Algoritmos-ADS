// Leia um número e escreva se o número é inteiro ou decimal.
import { question } from 'readline-sync'

function main() {
    const numero = get_number('Digite um número: ')

    if (ehInteiro(numero)) {
        console.log('O número é inteiro')
    } else {
        console.log('O número é decimal')
    }
}

function ehInteiro(numero) {
    return Math.floor(numero) === numero
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()
