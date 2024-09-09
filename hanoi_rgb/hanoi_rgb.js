import { menu_niveis_jogo, jogar_rodada_com_torres, inicializar_torres, exibir_resultado_jogo, exibe_cabecalho_rodadas_jogador_2,
    exibe_cabecalho_inicio_jogo_basico, exibe_cabecalho_inicio_jogo_intermediario, exibe_cabecalho_inicio_jogo_avancado
} from './hanoi_rgb_utils.js'
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

        // 1 - Nível básico: apenas torre R preenchida com 9 itens aleatoriamente e as torres B e G vazias
        } else if (nivel == 1){
            clear_screen()
            exibe_cabecalho_inicio_jogo_basico()

            // inicializa as torres para o jogador 1
            let qtd_itens = 9
            let { torreR, torreG, torreB } = inicializar_torres(qtd_itens, nivel)
            
            // copia as torres para reutilizar no jogo do jogador 2
            let torreR_clone = [...torreR]
            let torreG_clone = [...torreG]
            let torreB_clone = [...torreB]

            print("Jogador 1, sua vez! Boa sorte!")
            let jogadas_jogador1 = jogar_rodada_com_torres(torreR, torreG, torreB)
            press_enter_to_continue("\nPressione enter para continuar o Jogo..")

            exibe_cabecalho_rodadas_jogador_2()
            
            // inicia as torres para o jogador 2 usar com as torres copiadas
            let jogadas_jogador2 = jogar_rodada_com_torres(torreR_clone, torreG_clone, torreB_clone)

            let resultado = exibir_resultado_jogo(jogadas_jogador1, jogadas_jogador2)
            print(resultado)

        // 2 - Nível intermediário: mais itens espalhados inicialmente pelas 3 torres e não somente na torre R
        } else if (nivel == 2){
            clear_screen()
            exibe_cabecalho_inicio_jogo_intermediario()

            let qtd_itens = 9
            let { torreR, torreG, torreB } = inicializar_torres(qtd_itens, nivel)

            let torreR_clone = [...torreR]
            let torreG_clone = [...torreG]
            let torreB_clone = [...torreB]

            print("Jogador 1, sua vez! Boa sorte!")
            let jogadas_jogador1 = jogar_rodada_com_torres(torreR, torreG, torreB)
            press_enter_to_continue("\nPressione enter para continuar o Jogo..")

            exibe_cabecalho_rodadas_jogador_2()
            
            let jogadas_jogador2 = jogar_rodada_com_torres(torreR_clone, torreG_clone, torreB_clone)

            let resultado = exibir_resultado_jogo(jogadas_jogador1, jogadas_jogador2)
            print(resultado)

        // 3 - Nível avançado: nível máximo de preenchimento inicial, ou seja, 9 itens em cada torre 
        // totalizando 27 itens para movimentação
        } else if (nivel == 3){
            clear_screen()
            exibe_cabecalho_inicio_jogo_avancado()

            let qtd_itens = 9
            let { torreR, torreG, torreB } = inicializar_torres(qtd_itens, nivel)

            let torreR_clone = [...torreR]
            let torreG_clone = [...torreG]
            let torreB_clone = [...torreB]

            print("Jogador 1, sua vez! Boa sorte!")
            let jogadas_jogador1 = jogar_rodada_com_torres(torreR, torreG, torreB)
            press_enter_to_continue("\nPressione enter para continuar o Jogo..")

            exibe_cabecalho_rodadas_jogador_2()
            
            let jogadas_jogador2 = jogar_rodada_com_torres(torreR_clone, torreG_clone, torreB_clone)

            let resultado = exibir_resultado_jogo(jogadas_jogador1, jogadas_jogador2)
            print(resultado)

        } else {
            clear_screen()
            print('\nNível Inválido!\n')
            press_enter_to_continue("\nPressione enter para voltar ao Menu Inicial...")
        }
    }
}

main()