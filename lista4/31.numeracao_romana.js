/*
Escreva um algoritmo que leia um número decimal (até 3 dígitos) e escreva o seu equivalente em
numeração romana. Utilize funções para obter cada dígito do número decimal e para a transformação
de numeração decimal para romana (Dica: 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1.000 = M).
*/
import { question } from 'readline-sync'
import { get_number, print } from '../utils/io_utils.js'

function main(){

    let resposta = 'S'

    while(resposta !== 'N'){
        const numero_decimal = get_number('Digite um número decimal de até 3 dígitos: ')
        const C = obter_centena_numeracao_romana(numero_decimal)
        const D = obter_dezena_numeracao_romana(numero_decimal)
        const U = obter_unidade_numeracao_romana(numero_decimal)

        const numero_romano = `${C}`+`${D}`+`${U}`
        
        print('************ CONVERSOR NÚMEROS ROMANOS ************ ')
        print('--------------------------------------------------')
        print(`Número em decimal: ${numero_decimal}`)
        print(`Número em sistema romano: ${numero_romano}`)
        print(`Centena romana: ${C}`)
        print(`Dezena romana: ${D} `)
        print(`Unidade romana: ${U}`)

        resposta = question('Deseja converter mais algum número (S/N)? ')
    }

}

function obter_unidade_numeracao_romana(numero_decimal){
    const unidade = numero_decimal % 10
    if (unidade === 1){
        return 'I'
    } else if (unidade === 2){
        return 'II'
    } else if (unidade === 3){
        return 'III'
    } else if (unidade === 4){
        return 'IV' // 5 - 1 = 4
    } else if (unidade === 5){
        return 'V'
    } else if (unidade === 6){
        return 'VI'
    } else if (unidade === 7){
        return 'VII'
    } else if (unidade === 8){
        return 'VIII'
    } else if (unidade === 9){
        return 'IX' // 10 - 1 = 9
    } else {
        return '-'
    }
}

function obter_dezena_numeracao_romana(numero_decimal){
    const dezena = Math.floor(numero_decimal / 10) % 10 // 345 / 10 = 34 % 10 = 4
    if (dezena == 1){
        return 'X' // 10
    } else if (dezena === 2){
        return 'XX' // 20
    } else if (dezena === 3){
        return 'XXX' // 30
    } else if (dezena === 4){
        return 'XL' // 50 - 10 = 40
    } else if (dezena === 5){
        return 'L'
    } else if (dezena === 6){
        return 'LX' // 50 + 10 = 60
    } else if (dezena === 7){
        return 'LXX' // 50 + 20 = 70
    } else if (dezena === 8){
        return 'LXXX' // 50 + 30 = 80
    } else if (dezena === 9){
        return 'XC' // 100 - 10 = 90
    } else {
        return '-' // dezena = 0
    }

}

function obter_centena_numeracao_romana(numero_decimal){
    const centena = Math.floor(numero_decimal/100)
    if (centena === 1){ // 100
        return 'C'
    } else if (centena === 2){ // 200
        return 'CC'
    } else if (centena === 3){ // 300
        return 'CCC'
    } else if (centena === 4){
        return 'CD' // 500 - 100 = 400
    } else if (centena === 5){
        return 'D' // 500
    } else if (centena === 6){
        return 'DC' // 500 + 100 = 600
    } else if (centena === 7){
        return 'DCC' // 500 + 200 = 700
    } else if (centena === 8){
        return 'DCCC' // 500 + 300 = 800
    } else if (centena === 9) {
        return 'CM' // 1000 - 100 = 900
    } else {
        return '-'
    }
}

main()