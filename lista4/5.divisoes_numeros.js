// Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada
//divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até
//chegar a 2.
import { get_number, print } from '../utils/io_utils.js'

function main(){
    const x = get_number('Digite um número: ')
    const n = get_number('Digite um número: ')

    const resultado = obter_divisoes(x, n)
    print(`O resultado das divisões é: ${resultado.toFixed(2)}`)
}

function obter_divisoes(x, n){
    while (n >= 2) {
        x /= n
        n--
    }
    return x
}

main()