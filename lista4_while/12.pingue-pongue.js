/*
Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e
responda quem ganha a partida. A partida chega ao final se:
· Um dos jogadores chega a 21 pontos e a diferença de pontos entre os jogadores é maior ou igual a 2.
· Se a primeira não for atendida, ganha aquele que, com mais de 21 pontos, consiga colocar uma
diferença de 2 pontos sobre o adversário.
*/
import { get_number, print } from '../utils/io_utils.js'

function main(){
    let pontos_jogador1 = 0
    let pontos_jogador2 = 0

    while (true) {
        const pontos_jogador_1 = get_number('Digite os pontos do jogador 1: ')
        pontos_jogador1 += pontos_jogador_1

        const pontos_jogador_2 = get_number('Digite os pontos do jogador 2: ')
        pontos_jogador2 += pontos_jogador_2

        if ((pontos_jogador1 >= 21 && pontos_jogador1 - pontos_jogador2 >= 2) || pontos_jogador1 > 21) {
            print('JOGADOR 1 GANHOU!')
            break
        } else if ((pontos_jogador2 >= 21 && pontos_jogador2 - pontos_jogador1 >= 2) || pontos_jogador2 > 21) {
            print('JOGADOR 2 GANHOU!')
            break
        }
    }
}

main()

