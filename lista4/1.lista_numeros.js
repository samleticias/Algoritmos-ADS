// Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus
// divisores. (flag número = 0).
import { get_number, print } from '../utils/io_utils.js'
function encontrar_divisores(numero) {
    let divisores = []
    let i = 1
    while (i <= numero) {
        if (numero % i === 0) {
            divisores.push(i)
        }
        i++
    }
    return divisores
}

function main(){
var numero
while (true) {
    numero = get_number('Digite um número (0 para sair): ')
    if (numero === 0) {
        print('Programa encerrado')
        break
    }
    let divisores = encontrar_divisores(numero)
    print(`Divisores de ${numero}: ${divisores}`)}
}

main()

