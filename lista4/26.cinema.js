/*
Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião
em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e
a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1).
· a média das idades das pessoas que responderam ótimo;
· a quantidade de pessoas que respondeu regular;
· o percentual de pessoas que respondeu bom entre os entrevistados.
*/
import { get_number, print } from '../utils/io_utils.js'

function main(){
    let soma_idades_otimo = 0
    let quantidade_regular = 0
    let quantidade_bom = 0
    let total_entrevistados = 0

    while (true) {
        const idade = get_number('Digite a idade (ou -1 para sair): ')
        
        if (idade === -1) {
            break
        }

        const opiniao = get_number('Opinião (1=ótimo, 2=bom, 3=regular, 4=péssimo): ')

        total_entrevistados++


        if (opiniao === 1){
            soma_idades_otimo += idade
        } else if(opiniao === 2){
            quantidade_bom++
        } else if (opiniao === 3){
            quantidade_regular++
        } else {
            // pessimo
        }
    }

    // média das idades das pessoas que responderam otimo
    const media_idades_otimo = soma_idades_otimo / (total_entrevistados > 0 ? total_entrevistados : 1)

    // percentual de pessoas que responderam bom entre os entrevistados
    const percentual_bom = (quantidade_bom / total_entrevistados) * 100

    print('************ AVALIAÇÃO DO FILME ************ ')
    print('--------------------------------------------------')
    print(`Média das idades das pessoas que responderam ótimo: ${media_idades_otimo.toFixed(2)}`)
    print(`Quantidade de pessoas que respondeu regular: ${quantidade_regular}`)
    print(`Percentual de pessoas que respondeu bom entre os entrevistados: ${percentual_bom.toFixed(2)}%`)
    print(`Total de entrevistados: ${total_entrevistados}`)
}

main()
