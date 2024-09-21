// Calcular Exponencial de um Número N elevado a expoente E.
import {get_number, print} from '../../utils/io_utils.js'

function main(){
    let numero = get_number('\nDigite um número: ')
    let expoente = get_number('\nDigite o expoente a que deseja elevar o número: ')

    let resultado = obter_exponencial(numero, expoente)

    print(`\nResultado da Exponenciação: ${numero} elevado a ${expoente} é igual a ${resultado}\n`)
}

// Função Recursiva
// 1. Caso base ou caso inicial
// 2. Convergencia de dados
// 3. Trabalho
// 4. Função chamar a si mesma

function obter_exponencial(numero, expoente) {
    if (expoente === 0){
        return 1
    }
    if (numero === 0){
        return 0
    }
    return numero * obter_exponencial(numero, expoente - 1)
}

main()