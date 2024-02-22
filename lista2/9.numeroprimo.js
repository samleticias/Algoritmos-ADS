// Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.
import {question} from 'readline-sync'

function main(){
    const num = get_number('Digite um número entre 0 e 100: ')

    if (num >= 0 && num <= 100) {
        if (verificar_numero(num)) {
            console.log(num + ' é um número primo')
        } else {
            console.log(num + ' não é um número primo')
        }
    } else {
        console.log('Número fora do intervalo permitido')
    }
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

function verificar_numero(num){
    if (num <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

main()

