// As normas para a exibição da bibliografia de um artigo cientifico, de uma monografia, de um livro,
// texto etc., exigem que o nome do autor seja escrito no formato último sobrenome, sequência das
// primeiras letras do nome e dos demais sobrenomes, seguidas de ponto final. Por exemplo, Antonio
// Carlos Jobim seria referido por Jobim, A. C.. Escreva um programa que receba um nome completo e o
// escreva no formato de bibliografia.
import { question } from 'readline-sync'

function main() {
    let nomeCompleto = question("Digite o nome completo: ")
    let nomeBibliografia = formatarNomeBibliografia(nomeCompleto)
    console.log(`Nome no formato de bibliografia: ${nomeBibliografia}`)
}

function formatarNomeBibliografia(nomeCompleto) {
    let partesNome = nomeCompleto.split(' ')

    let sobrenome = partesNome.pop()

    let iniciais = partesNome.map(nome => nome[0]).join(". ") + "."

    let nomeFormatado = sobrenome + ", " + iniciais

    return nomeFormatado
}

main()
