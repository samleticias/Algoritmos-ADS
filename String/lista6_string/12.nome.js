// As companhias de transportes aéreos costumam representar os nomes dos passageiros no formato último
// sobrenome/nome. Por exemplo, o passageiro Carlos Drummond de Andrade seria indicado por
// Andrade/Carlos. Escreva um programa que leia um nome completo e o escreva no formato acima.
import { question } from 'readline-sync'

function main() {
    let nomeCompleto = question("Digite o nome completo: ")
    let nomeFormatado = formatarNome(nomeCompleto)
    console.log(`Nome formatado: ${nomeFormatado}`)
}

function formatarNome(nomeCompleto) {
    let partesNome = nomeCompleto.split(' ')
    
    let sobrenome = partesNome.pop()

    let nomeFormatado = sobrenome + "/"
    nomeFormatado += partesNome.join(" ")

    return nomeFormatado
}

main()
