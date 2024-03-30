/*
Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,
nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o
numero de identificação e o peso do boi mais magro e do boi mais gordo.
*/
import { question } from 'readline-sync'
import { get_number, print } from '../utils/io_utils.js'

function main() {
    let N_fichas = get_number('Número de fichas: ')
    let contador = 0
    let peso_boi_mais_gordo = 0
    let peso_boi_mais_magro = Infinity 
    let no_identificacao_boi_mais_magro = 0
    let no_identificacao_boi_mais_gordo = 0

    while (contador < N_fichas) {
        let no_identificacao = get_number('Número de Identificação: ')
        let nome = question('Nome: ')
        let peso = get_number('Peso (em Kg): ')

        if (peso > peso_boi_mais_gordo) {
            peso_boi_mais_gordo = peso
            no_identificacao_boi_mais_gordo = no_identificacao
        }

        if (peso < peso_boi_mais_magro) {
            peso_boi_mais_magro = peso
            no_identificacao_boi_mais_magro = no_identificacao
        }

        contador++
    }

    print('-------------------------------------------------------')
    print(`Número de identificação do boi mais magro: ${no_identificacao_boi_mais_magro}`)
    print(`Número de identificação do boi mais gordo: ${no_identificacao_boi_mais_gordo}`)
    print(`Peso do boi mais magro: ${peso_boi_mais_magro} Kg`)
    print(`Peso do boi mais gordo: ${peso_boi_mais_gordo} Kg`)
    print('-------------------------------------------------------')
}

main()
