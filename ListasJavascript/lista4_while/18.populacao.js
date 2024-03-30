/*
Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de
crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes,
crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão
necessários, para que a população da cidade A ultrapasse a população da cidade B.
*/
import { print } from '../utils/io_utils.js'

function main(){
    let populacao_cidade_a = 200000
    const taxa_anual_cresc_a = 1.035 // 3.5 %
    let populacao_cidade_b = 800000
    const taxa_anual_cresc_b = 1.0135 // 1.35 %

    let populacao_futura_cidade_a = populacao_cidade_a
    let quantidade_anos = 0

    while (populacao_futura_cidade_a <= populacao_cidade_b) {
        populacao_futura_cidade_a *= taxa_anual_cresc_a
        populacao_cidade_b *= taxa_anual_cresc_b

        quantidade_anos++
    }

    print(`Anos necessários para que a população da cidade A ultrapasse a população da cidade B: ${quantidade_anos}`)
}

main()
