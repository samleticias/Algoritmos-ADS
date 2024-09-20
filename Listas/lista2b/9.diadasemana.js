// Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), se digitar outro
// valor deve aparecer valor inválido.

import {question} from 'readline-sync'

function main() {
    const n = get_number('Digite um número: ')
    console.log(verificar_numero(n))

}

function verificar_numero(n){
    if (n === 1){
        return `1 - Domingo`
    } else if (n === 2){
        return `2 - Segunda`
    } else if(n === 3){
        return `3 - Terça`
    } else if (n === 4){
        return `4 - Quarta`
    } else if (n === 5){
        return `5 - Quinta`
    } else if (n === 6){
        return `6 - Sexta`
    } else if (n === 7){
        return `7 - Sábado`
    } else {
        return `Valor Inválido!`
    }
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()