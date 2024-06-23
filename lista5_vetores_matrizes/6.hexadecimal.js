// Leia um número (vetor com 8 elementos) na base binária, calcule e escreva este número na base
// hexadecimal e na base decimal.
import { question } from 'readline-sync'

function main(){
    const qtd_elementos = 8
    let vetor_binario = []

    for (let i = 0; i < qtd_elementos; i++) {
        let bit = question(`Elemento ${i + 1} (0 ou 1): `)
        while (bit !== '0' && bit !== '1') {
            console.log('Dígito inválido!')
            bit = question(`Elemento ${i + 1} (0 ou 1): `)
        }
        vetor_binario.push(bit)
    }

    const binario_str = vetor_binario.join('')

    const decimal = parseInt(binario_str, 2)

    const hexadecimal = decimal.toString(16).toUpperCase()

    console.log(`Binário: ${binario_str}`)
    console.log(`Decimal: ${decimal}`)
    console.log(`Hexadecimal: ${hexadecimal}`)
}

main()