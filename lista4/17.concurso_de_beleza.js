/*
Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. Escreva um
algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais
baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM').
*/
import { question } from 'readline-sync'
import { get_number, print } from '../utils/io_utils.js'

function main(){

    let nome_candidata_mais_alta = ''
    let altura_candidata_mais_alta = 0
    let nome_candidata_mais_baixa = ''
    let altura_candidata_mais_baixa = Infinity

    let nome_candidata_mais_magra = ''
    let peso_candidata_mais_magra = Infinity
    let nome_candidata_mais_gorda = ''
    let peso_candidata_mais_gorda = 0

    let nome = question('Digite o nome da candidata (ou "FIM" para sair): ')

    while (nome !== 'FIM') {

        const altura = get_number(`Digite a altura da candidata ${nome} (em cm): `)
        const peso = get_number(`Digite o peso da candidata ${nome} (em Kg): `)

        
        // candidata mais alta
        if (altura > altura_candidata_mais_alta) {
            altura_candidata_mais_alta = altura
            nome_candidata_mais_alta = nome
        }

        // candidata mais baixa
        if (altura < altura_candidata_mais_baixa) {
            altura_candidata_mais_baixa = altura
            nome_candidata_mais_baixa = nome
        }

        // candidata mais magra
        if (peso < peso_candidata_mais_magra) {
            peso_candidata_mais_magra = peso
            nome_candidata_mais_magra = nome
        }

        // candidata mais gorda
        if (peso > peso_candidata_mais_gorda) {
            peso_candidata_mais_gorda = peso
            nome_candidata_mais_gorda = nome
        }

        nome = question('Digite o nome da candidata (ou "FIM" para sair): ')
    }

    print(`Candidata mais alta: ${nome_candidata_mais_alta} (${altura_candidata_mais_alta} cm)`)
    print(`Candidata mais baixa: ${nome_candidata_mais_baixa} (${altura_candidata_mais_baixa} cm)`)
    print(`Candidata mais magra: ${nome_candidata_mais_magra} (${peso_candidata_mais_magra} Kg)`)
    print(`Candidata mais gorda: ${nome_candidata_mais_gorda} (${peso_candidata_mais_gorda} Kg)`)

}

main()