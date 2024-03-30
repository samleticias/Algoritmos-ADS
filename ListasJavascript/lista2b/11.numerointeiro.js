// Leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do
// número. Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplos:
// o 326 = 3 centenas, 2 dezenas e 6 unidades
// o 12 = 1 dezena e 2 unidades
import { question } from 'readline-sync'

function main() {
    const numero = get_number('Digite um número inteiro menor que 1000: ')

    if (numero >= 0 && numero < 1000) {
        const centenas = Math.floor(numero / 100)
        const dezenas = Math.floor((numero % 100) / 10)
        const unidades = numero % 10

        imprimir_quantidades(centenas, dezenas, unidades)
    } else {
        console.log('Número inválido')
    }
}

function imprimir_quantidades(centenas, dezenas, unidades) {
    let resultado = ''

    if (centenas > 0) {
        resultado += `${centenas} centena${centenas > 1 ? 's' : ''}`
    }

    if (dezenas > 0) {
        if (resultado.length > 0) {
            resultado += ' e '
        }
        resultado += `${dezenas} dezena${dezenas > 1 ? 's' : ''}`
    }

    if (unidades > 0) {
        if (resultado.length > 0) {
            resultado += ' e '
        }
        resultado += `${unidades} unidade${unidades > 1 ? 's' : ''}`
    }

    console.log(resultado)
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()
