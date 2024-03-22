/*
Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais. O
entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então
responder: indeciso=99, outros=98, nulo/branco=0. O algoritmo deve ler a opinião de voto de cada
entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1. Ao final, devem ser mostrados:
· a porcentagem de cada candidato;
· a porcentagem dos outros candidatos;
· a porcentagem de eleitores indecisos;
· a porcentagem de votos nulos/brancos;
· o total de entrevistados;
· uma mensagem indicando a possibilidade ou não de haver 2o turno.
*/
import { get_number, print } from '../utils/io_utils.js'

function main(){
    let soma_votos_serra = 0
    let soma_votos_dilma = 0
    let soma_votos_cirogomes = 0
    let soma_votos_indecisos = 0
    let soma_votos_outros = 0
    let soma_votos_brancos_nulos = 0
    let contador_votos_validos = 0

    let voto = get_number('Digite o número do seu candidato (ou -1 para sair): ')

    while (voto !== -1) {

        contador_votos_validos++

        if (voto === 45){
            soma_votos_serra++
        } else if (voto === 13){
            soma_votos_dilma++
        } else if (voto === 23){
            soma_votos_cirogomes++
        } else if (voto === 99){ // indeciso=99, outros=98, nulo/branco=0
            soma_votos_indecisos++
        } else if (voto === 98){
            soma_votos_outros++
        } else {
            soma_votos_brancos_nulos++
        }

        voto = get_number('Digite o número do seu candidato (ou -1 para sair): ')
    }

    const total_entrevistados = contador_votos_validos + soma_votos_indecisos + soma_votos_outros + soma_votos_brancos_nulos
    const porcentagem_serra = (soma_votos_serra / total_entrevistados) * 100
    const porcentagem_dilma = (soma_votos_dilma / total_entrevistados) * 100
    const porcentagem_cirogomes = (soma_votos_cirogomes / total_entrevistados) * 100
    const porcentagem_indecisos = (soma_votos_indecisos / total_entrevistados) * 100
    const porcentagem_outros = (soma_votos_outros / total_entrevistados) * 100
    const porcentagem_brancos_nulos = (soma_votos_brancos_nulos / total_entrevistados) * 100

    print(`Porcentagem de votos para Serra: ${porcentagem_serra.toFixed(2)}%`)
    print(`Porcentagem de votos para Dilma: ${porcentagem_dilma.toFixed(2)}%`)
    print(`Porcentagem de votos para Ciro Gomes: ${porcentagem_cirogomes.toFixed(2)}%`)
    print(`Porcentagem de eleitores indecisos: ${porcentagem_indecisos.toFixed(2)}%`)
    print(`Porcentagem de votos nulos/brancos: ${porcentagem_brancos_nulos.toFixed(2)}%`)
    print(`Total de entrevistados: ${total_entrevistados}`)

    if (porcentagem_serra < 50 && porcentagem_dilma < 50 && porcentagem_cirogomes < 50) {
        print('Há possibilidade de haver segundo turno')
    } else {
        print('Não há possibilidade de haver segundo turno')
    }
}

main()
