// Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. Escreva o
// resultado da última divisão efetuada.
import { get_number, print } from '../utils/io_utils.js'

function main(){
    const n = get_number('Digite um número: ')

    const resultado = obter_divisao_numero(n)
    print(`O resultado da última divisão é: ${resultado}`)
}
function obter_divisao_numero(n){
    while (n >= 1) {
        n /= 2
    }
    return n * 2
}

main()