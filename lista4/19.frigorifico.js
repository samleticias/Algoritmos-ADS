/*
Em um frigorífico, cada boi traz em seu pescoço um cartão contendo o seu n.o de identificação e seu
peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o n.o de identificação e o peso do
boi mais magro e do boi mais gordo. (Flag: n.o identificação=0)
*/
import { get_number, print } from '../utils/io_utils.js'

function main(){
    let no_identificacao_boi_mais_gordo = 0
    let peso_boi_mais_gordo = 0
    let no_identificacao_boi_mais_magro = 0
    let peso_boi_mais_magro = 0

    let no_identificacao = get_number('Digite o número de identificação do animal: ')

    while (no_identificacao !== 0) {

        const peso = get_number(`Digite o peso do animal de nº ${no_identificacao} (em Kg): `)

        
        // boi mais gordo
        if (peso > peso_boi_mais_gordo) {
            peso_boi_mais_gordo = peso
            no_identificacao_boi_mais_gordo = no_identificacao
        }

        // boi mais magro
        if (peso < peso_boi_mais_magro) {
            peso_boi_mais_magro = peso
            no_identificacao_boi_mais_magro = no_identificacao
        }

        no_identificacao = get_number('Digite o número de identificação do animal: ')

    }
    print('****************************** FRIGORÍFICO *******************************')
    print('----------------------------------------------------------------------------')
    print(`Boi mais gordo: Nº Identificação ${no_identificacao_boi_mais_gordo} - ${peso_boi_mais_gordo} Kg`)
    print(`Boi mais magro: Nº Identificação ${no_identificacao_boi_mais_magro} - ${peso_boi_mais_magro} Kg`)

}

main()