/*
Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos.
Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:
· 1, 2, 3 = voto para os respectivos candidatos;
· 9 = voto nulo;
· 0 = voto em branco;
Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva:
a) total de votos para cada candidato;
b) total de votos nulos;
c) total de votos em branco;
d) quem venceu a eleição.
*/
import { get_number, print } from '../utils/io_utils.js'

function main(){
    let N_eleitores = get_number('Número de eleitores: ')
    let contador = 0
    let soma_votos_candidato_1 = 0
    let soma_votos_candidato_2 = 0
    let soma_votos_candidato_3 = 0
    let soma_votos_nulos = 0
    let soma_votos_brancos = 0
    let vencedor = ''

    while (contador < N_eleitores){
        let voto = get_number('Voto: ')

        if (voto === 1){
            soma_votos_candidato_1++
        } else if (voto === 2){
            soma_votos_candidato_2++
        } else if (voto === 3){
            soma_votos_candidato_3++
        } else if (voto === 9){
            soma_votos_nulos++
        } else {
            soma_votos_brancos++
        }

        if (soma_votos_candidato_1 > soma_votos_candidato_2 && soma_votos_candidato_1 > soma_votos_candidato_3){
            vencedor = 'Candidato 1 venceu!'
        } else if (soma_votos_candidato_2 > soma_votos_candidato_1 && soma_votos_candidato_2 > soma_votos_candidato_3){
            vencedor = 'Candidato 2 venceu!'
        } else if (soma_votos_candidato_3 > soma_votos_candidato_1 && soma_votos_candidato_3 > soma_votos_candidato_2){
            vencedor = 'Candidato 3 venceu!'
        } else {
            vencedor = 'Votos Nulos ou Brancos foram maiores!'
        }

        contador++
    }

    print('************** RESULTADO **************')
    print('----------------------------------------')
    print(`Total de Votos Candidato 1: ${soma_votos_candidato_1}`)
    print(`Total de Votos Candidato 2: ${soma_votos_candidato_2}`)
    print(`Total de Votos Candidato 3: ${soma_votos_candidato_3}`)
    print(`Total de votos nulos: ${soma_votos_nulos}`)
    print(`Total de votos brancos: ${soma_votos_brancos}`)
    print(`Total de Eleitores: ${N_eleitores}`)
    print(`Vencedor: ${vencedor}`)
    print('-----------------------------------------')

}

main()