import { menu_niveis_jogo, jogar_rodada} from './hanoi_rgb_utils.js'
import {clear_screen, exibir_opcoes, print, press_enter_to_continue} from './my_entsai_utils.js'

function main(){
    let opcao = -1

    while(opcao !== 0){
        clear_screen()
        let nivel = exibir_opcoes(menu_niveis_jogo(), 'Escolha um nível:')

        // 0 - Sair do jogo
        if (nivel == 0){
            clear_screen()
            print('Saindo do jogo...')
            break

        // 1 - Inicia jogo nível básico
        } else if (nivel == 1){
            clear_screen()
            print('\n|====== INÍCIO DO JOGO ======|\n')
            print("Jogador 1, sua vez! Boa sorte!")
            let jogadas_jogador1 = jogar_rodada(nivel)
            press_enter_to_continue("\nPressione enter para continuar o Jogo..")

            print('\n|=== INICIANDO RODADAS JOGADOR 2! ===|')
            print("\nAgora é a vez do Jogador 2! Boa sorte!")
            let jogadas_jogador2 = jogar_rodada(nivel)

            print("\n=================== RESULTADOS ===================\n")
            print(`> Pontuação Jogador 1 = ${jogadas_jogador1} jogadas\n`)
            print(`> Pontuação Jogador 2 = ${jogadas_jogador2} jogadas\n`)
            if (jogadas_jogador1 < jogadas_jogador2){
                print(`\nJogador 1 venceu com ${jogadas_jogador1} jogadas!\n`)
            } else if (jogadas_jogador1 > jogadas_jogador2){
                print(`\nJogador 2 venceu com ${jogadas_jogador2} jogadas!\n`)
            } else {
                print(`\nEmpate! Ambos os jogadores concluíram o jogo com ${jogadas_jogador1} jogadas!\n`)
            }
            press_enter_to_continue("\nPressione enter para voltar ao Menu Inicial...")

        }
    }
}

main()