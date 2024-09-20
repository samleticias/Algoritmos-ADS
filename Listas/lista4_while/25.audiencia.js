/* 
Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para
cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que
estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando
quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora,
mostrando ao final, o número de cada canal e sua respectiva audiência.
*/
import { get_number, print } from '../utils/io_utils.js'

function main(){
    let soma_audiencia_canal_2 = 0
    let soma_audiencia_canal_4 = 0
    let soma_audiencia_canal_5 = 0
    let soma_audiencia_canal_7 = 0
    let soma_audiencia_canal_10 = 0
    let total_telespectadores = 0

    let canal = get_number('Digite o número do canal (ou 0 para sair): ')

    while (canal !== 0) {

        const telespectadores = get_number('Número de pessoas que estavam assistindo TV: ')

        total_telespectadores += telespectadores

        if (canal === 2){
            soma_audiencia_canal_2 += telespectadores
        } else if (canal === 4){
            soma_audiencia_canal_4 += telespectadores
        } else if (canal === 5){
            soma_audiencia_canal_5 += telespectadores
        } else if (canal === 7){
            soma_audiencia_canal_7 += telespectadores
        } else {
            soma_audiencia_canal_10 += telespectadores
        }

        canal = get_number('Digite o número do canal (ou 0 para sair): ')
    }

    const porcentagem_audiencia_canal_2 = (soma_audiencia_canal_2 / total_telespectadores) * 100
    const porcentagem_audiencia_canal_4 = (soma_audiencia_canal_4 / total_telespectadores) * 100
    const porcentagem_audiencia_canal_5 = (soma_audiencia_canal_5 / total_telespectadores) * 100
    const porcentagem_audiencia_canal_7 = (soma_audiencia_canal_7 / total_telespectadores) * 100
    const porcentagem_audiencia_canal_10 = (soma_audiencia_canal_10 / total_telespectadores) * 100
        
    print('************ CANAIS DE TV TERESINENSE ************ ')
    print('--------------------------------------------------')
    print(`Porcentagem de audiência para canal 2: ${porcentagem_audiencia_canal_2.toFixed(2)}%`)
    print(`Porcentagem de audiência para canal 4: ${porcentagem_audiencia_canal_4.toFixed(2)}%`)
    print(`Porcentagem de audiência para canal 5: ${porcentagem_audiencia_canal_5.toFixed(2)}%`)
    print(`Porcentagem de audiência para canal 7: ${porcentagem_audiencia_canal_7.toFixed(2)}%`)
    print(`Porcentagem de audiência para canal 10: ${porcentagem_audiencia_canal_10.toFixed(2)}%`)
    print(`Total de telespectadores: ${total_telespectadores}`)
}

main()
