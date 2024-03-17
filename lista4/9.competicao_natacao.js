/*
Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da
prova e a quantidade de nadadores. O fim dos dados é indicado pelo número da prova igual a 0 e
quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo,
clube (“a” ou “b”) e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério:
Lugar Pontos
1       9
2       6
3       4
4       3
Ao final, o algoritmo deve escreva os totais de pontos de cada clube, indicando o clube vencedor.
*/
import { question } from 'readline-sync'
import { print, get_number } from '../utils/io_utils.js'
function main() {
    let pontos_clube_a = 0
    let pontos_clube_b = 0

    while (true) {
        const numero_prova = get_number('Digite o número da prova: ')
        const qtd_nadadores = get_number('Digite a quantidade de nadadores: ')

        if (numero_prova === 0 || qtd_nadadores === 0) { // sair do programa
            break
        }

        for (let i = 0; i < qtd_nadadores; i++) { // quantidade de jogadores definida -> usa for
            const nome = question(`Digite o nome do nadador ${i + 1}: `)
            const classificacao = get_number(`Digite a classificação do nadador ${i + 1}: `)
            const tempo = get_number(`Digite o tempo do nadador ${i + 1}: `)
            const clube = question(`Digite o clube do nadador ${i + 1} (a ou b): `)

            let pontos = 0
            if (classificacao === 1) {
                pontos = 9
            } else if (classificacao === 2) {
                pontos = 6
            } else if (classificacao === 3) {
                pontos = 4
            } else if (classificacao === 4) {
                pontos = 3
            }

            if (clube === 'a') {
                pontos_clube_a += pontos
            } else if (clube === 'b') {
                pontos_clube_b += pontos
            }
        }
    }

    print(`Pontos do Clube A: ${pontos_clube_a}`)
    print(`Pontos do Clube B: ${pontos_clube_b}`)

    if (pontos_clube_a > pontos_clube_b) {
        print('O Clube A venceu!')
    } else if (pontos_clube_b > pontos_clube_a) {
        print('O Clube B venceu!')
    } else {
        print('Empate!')
    }
}

main()
