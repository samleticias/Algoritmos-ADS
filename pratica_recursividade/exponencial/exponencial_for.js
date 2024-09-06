// Calcular Exponencial de um Número N elevado a expoente E.
import {get_number, print} from '../../utils/io_utils.js'

function main(){
    let numero = get_number('\nDigite um número: ')
    let expoente = get_number('\nDigite o expoente a que deseja elevar o número: ')

    let resultado = obter_exponencial(numero, expoente)

    print(`\nResultado da Exponenciação: ${numero} elevado a ${expoente} é igual a ${resultado}\n`)
}

function obter_exponencial(numero, expoente) {
    let exponencial = 1 

    for (let i = 0; i < expoente; i++) {
        exponencial *= numero
    }
    return exponencial
}

main()