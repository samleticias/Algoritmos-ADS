// Leia um número (entre 0 e 255) na base decimal, calcule e escreva este número na base binária
//e na base hexadecimal.
import { get_number, print } from '../utils/io_utils.js'

function main(){
    const numero_decimal = get_number('Digite um número decimal entre 0 e 255: ')

    if (numero_decimal < 0 || numero_decimal > 255) {
        print('Número decimal fora do intervalo permitido!')
        return
    }

    const binario = obter_binario(numero_decimal)
    const hexadecimal = obter_hexadecimal(numero_decimal)

    print(`Número em binário: ${binario}`)
    print(`Número em hexadecimal: ${hexadecimal}`)
}

function obter_binario(numero_decimal){
    let binario = ''
    while (numero_decimal > 0) {
        binario = (numero_decimal % 2) + binario
        numero_decimal = Math.floor(numero_decimal / 2)
    }
    return binario || '0' // Retorna '0' se o número decimal for 0
}

function obter_hexadecimal(numero_decimal){
    let hexadecimal = ''
    while (numero_decimal > 0) {
        let resto = numero_decimal % 16
        if (resto < 10) {
            hexadecimal = resto + hexadecimal
        } else {
            hexadecimal = String.fromCharCode(65 + resto - 10) + hexadecimal
        }
        numero_decimal = Math.floor(numero_decimal / 16)
    }
    return hexadecimal || '0' // Retorna '0' se o número decimal for 0
}

main()