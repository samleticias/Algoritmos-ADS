// Leia 1 (um) número inteiro e escreva se este número é par ou impar.
import {question} from 'readline-sync'

function main(){
    const numero = get_number('Digite um número: ')

    let classificacao = verificar_numero(numero) 
}

function verificar_numero(numero){
    if (numero % 2 === 0){
        console.log('O número é par')
    } else {
        console.log('O número é ímpar')
    }
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()

