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
import {get_number, print} from '../utils/io_utils.js'

function main() {
    let N_eleitores = get_number('Digite a quantidade de eleitores: ')
    let total_votos_eleitores = 0
    let soma_votos_candidato_1 = 0
    let soma_votos_candidato_2 = 0
    let soma_votos_candidato_3 = 0
    let soma_votos_nulos = 0
    let soma_votos_brancos = 0

    for (let i = 1; i <= N_eleitores; i++) {
        let voto = get_number('Voto (1, 2, 3, 9 - Nulo, 0 - Branco): ')
        total_votos_eleitores++

        if (voto === 1) {
            soma_votos_candidato_1++
        } else if (voto === 2) {
            soma_votos_candidato_2++
        } else if (voto === 3) {
            soma_votos_candidato_3++
        } else if (voto === 9) {
            soma_votos_nulos++
        } else {
            soma_votos_brancos++
        }

    }

    print('>>>>>>> ELEIÇÃO <<<<<<<')
    print('----------------------------------------------')
    print(`Total de votos C1: ${soma_votos_candidato_1}`)
    print(`Total de votos C2: ${soma_votos_candidato_2}`)
    print(`Total de votos C3: ${soma_votos_candidato_3}`)
    print(`Total de votos nulos: ${soma_votos_nulos}`)
    print(`Total de votos brancos: ${soma_votos_brancos}`)
    print(`Total de eleitores: ${total_votos_eleitores}`)

    if (soma_votos_candidato_1 > soma_votos_candidato_2 && soma_votos_candidato_1 > soma_votos_candidato_3) {
        console.log('Candidato 1 venceu!')
    } else if (soma_votos_candidato_2 > soma_votos_candidato_1 && soma_votos_candidato_2 > soma_votos_candidato_3) {
        console.log('Candidato 2 venceu!')
    } else if (soma_votos_candidato_3 > soma_votos_candidato_1 && soma_votos_candidato_3 > soma_votos_candidato_3){
        console.log('Candidato 3 venceu!')
    } else {
        console.log('Votos nulos ou brancos em maioria!')
    }
    print('----------------------------------------------')

}

main()
