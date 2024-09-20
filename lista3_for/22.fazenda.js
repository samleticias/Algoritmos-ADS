/*
Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,
nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o
numero de identificação e o peso do boi mais magro e do boi mais gordo.
*/
import { question } from 'readline-sync'
import {get_number, print} from '../utils/io_utils.js'

function main(){
    let N_fichas = get_number('Quantidade de fichas: ')
    let no_identificacao_boi_mais_magro = 0
    let no_identificacao_boi_mais_gordo = 0
    let peso_boi_mais_magro = Infinity
    let peso_boi_mais_gordo = 0
    let total_animais = 0


    for (let i = 1; i <= N_fichas; i++) {
        let no_identificacao = get_number('Nº de Identificação: ')
        let nome = question('Nome: ')
        let peso = get_number('Peso (em Kg): ')
        total_animais++
        
        if (peso > peso_boi_mais_gordo) {
            peso_boi_mais_gordo = peso
            no_identificacao_boi_mais_gordo = no_identificacao
        }
        if (peso < peso_boi_mais_magro) {
            peso_boi_mais_magro = peso
            no_identificacao_boi_mais_magro = no_identificacao
        }

    }

    print('----------------------------------------------')
    print(`Peso do boi mais gordo (em Kg): ${peso_boi_mais_gordo}`)
    print(`Nº de Identificação do boi mais gordo: ${no_identificacao_boi_mais_gordo}`)
    print(`Peso do boi mais magro (em Kg): ${peso_boi_mais_magro}`)
    print(`Nº de Identificação do boi mais magro: ${no_identificacao_boi_mais_magro}`)
    print(`Total de animais registrados: ${total_animais}`)
    print('----------------------------------------------')


}

main()