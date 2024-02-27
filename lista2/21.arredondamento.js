// 21. Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
// maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
// contrario, é arredondado para o inteiro imediatamente inferior.

import {question} from 'readline-sync'

function main(){
    const n1 = get_number('Digite um número: ')
    // console.log(arredondar_numero(n1))
    const numero_arredondado = arredondar_numero(n1)
    console.log(`O número ${n1} arredondado é ${numero_arredondado}.`)
}

function arredondar_numero(n1){
    if (n1- Math.floor(n1) >= 0.5) {
        return Math.ceil(n1)
    } else {
        return Math.floor(n1)
    }
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()