// Converta um numero do sistema binário, dado como uma cadeia de zeros e uns, para o sistema decimal
// de numeração.
import { question } from 'readline-sync'

function main() {
    let binario = question("Digite um número binário: ")
    let decimal = converterParaDecimal(binario)
    console.log(`O número decimal correspondente é: ${decimal}`)
}

function converterParaDecimal(binario) {
    return parseInt(binario, 2)
}

main()
