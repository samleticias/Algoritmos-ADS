// Hanói RGB Utils
// Funcionalidades do Jogo
import { get_texto, print, exibir_opcoes, clear_screen, press_enter_to_continue } from "./my_entsai_utils.js"
import { exibe_elementos_vetor, gerar_vetor, get_size, meu_push, meu_unshift } from "./my_vetores_utils.js"
import { texto_para_caixa_alta } from './my_string_utils.js'

// funcao para exibir menu de niveis do jogo
export function menu_niveis_jogo() {
    const opcoes = [
        '---------------------------------------------',    
        '> > > > >  Bem-vindo ao Hanói RGB!  < < < < <',
        '---------------------------------------------',    
        '1 - Nível Básico', 
        '2 - Nível Intermediário',
        '3 - Nível Avançado',
        '0 - Sair do Jogo',
        '---------------------------------------------'
    ]
    return opcoes
}

// funcao para exibir menu de operacoes do jogo 
export function menu_operacoes_jogo() {
    const opcoes = [
        '----------------------------------------------',    
        '> > > > > >     Operações RGB     < < < < < <',
        '----------------------------------------------',    
        '1 - RB (Remover elemento de R e Adicionar em B)', 
        '2 - RG (Remover elemento de R e Adicionar em G)', 
        '3 - GR (Remover elemento de G e Adicionar em R)', 
        '4 - GB (Remover elemento de G e Adicionar em B)', 
        '5 - BG (Remover elemento de B e Adicionar em G)', 
        '6 - BR (Remover elemento de B e Adicionar em R)', 
        '----------------------------------------------'
    ]
    return opcoes
}

// funcao para exibir resultado do jogo
export function exibir_resultado_jogo(jogadas_jogador1, jogadas_jogador2){
    print("\n=================== RESULTADOS ===================\n")
    print(`> Pontuação Jogador 1 = ${jogadas_jogador1} jogadas\n`)
    print(`> Pontuação Jogador 2 = ${jogadas_jogador2} jogadas\n`)
    print("==================================================\n")

    if (jogadas_jogador1 < jogadas_jogador2){
        print(`\nJogador 1 venceu com ${jogadas_jogador1} jogadas!\n`)
    } else if (jogadas_jogador1 > jogadas_jogador2){
        print(`\nJogador 2 venceu com ${jogadas_jogador2} jogadas!\n`)
    } else {
        print(`\nEmpate! Ambos os jogadores concluíram o jogo com ${jogadas_jogador1} jogadas!\n`)
    }
    press_enter_to_continue("\nPressione enter para voltar ao Menu Inicial...")
}

// funcao para exibir cabecalho de inicio do jogo avançado
export function exibe_cabecalho_inicio_jogo_avancado(){
    print('\n|====== INÍCIO DO JOGO ======|\n')
    print('|====== Nível Avançado ======|\n')
}

// funcao para exibir cabecalho de inicio do jogo basico
export function exibe_cabecalho_inicio_jogo_basico(){
    print('\n|====== INÍCIO DO JOGO ======|\n')
    print('|======= Nível Básico =======|\n')
}

// funcao para exibir cabecalho de inicio do jogo intermediario
export function exibe_cabecalho_inicio_jogo_intermediario(){
    print('\n|======= INÍCIO DO JOGO ========|\n')
    print('|===== Nível Intermediário =====|\n')
}

// funcao para exibir cabecalho de inicio das rodadas do jogador 2
export function exibe_cabecalho_rodadas_jogador_2(){
    print('\n|=== INICIANDO RODADAS JOGADOR 2! ===|')
    print("\nAgora é a vez do Jogador 2! Boa sorte!")
}

// funcao para preencher torre com itens aleatorios
export function preencher_torre_com_elementos_aleatorios(elementos) {
    const indice_aleatorio = Math.floor(Math.random() * elementos.length)
    return elementos[indice_aleatorio]
}

// funcao para embaralhar elementos do vetor
export function embaralhar_elementos(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

// funcao para inicializar as torres
// Nível Básico ou Nível 1 é o citado acima, 
// Nível 2 - Intermediário tem mais itens inicialmente espalhados nas Torres diversas e não só na primeira.
// Nível 3 - Avançado --> tem o nível máximo de preenchimento inicial que permite ao usuário concluir o jogo. 
export function inicializar_torres(quantidade_itens, nivel){
    let itens = ['R', 'G', 'B']
    let torreR, torreG, torreB; 
    if (nivel === 1){
        torreR = gerar_vetor(quantidade_itens)
        torreG = []
        torreB = []

        for (let i = 0; i < get_size(torreR); i++) {
            torreR[i] = preencher_torre_com_elementos_aleatorios(itens)
        }
        embaralhar_elementos(torreR)

    } else if (nivel === 2){
        torreR = gerar_vetor(Math.floor(quantidade_itens / 3))
        torreG = gerar_vetor(Math.floor(quantidade_itens / 3))
        torreB = gerar_vetor(Math.floor(quantidade_itens / 3))

        for (let i = 0; i < get_size(torreR); i++) {
            torreR[i] = preencher_torre_com_elementos_aleatorios(itens)
        }
        for (let j = 0; j < get_size(torreG); j++) {
            torreG[j] = preencher_torre_com_elementos_aleatorios(itens)
        }
        for (let k = 0; k < get_size(torreB); k++) {
            torreB[k] = preencher_torre_com_elementos_aleatorios(itens)
        }

        embaralhar_elementos(torreR)
        embaralhar_elementos(torreG)
        embaralhar_elementos(torreB)

    } else if (nivel === 3){
        torreR = gerar_vetor(quantidade_itens)
        torreG = gerar_vetor(quantidade_itens)
        torreB = gerar_vetor(quantidade_itens)

        for (let i = 0; i < get_size(torreR); i++) {
            torreR[i] = preencher_torre_com_elementos_aleatorios(itens)
        }
        for (let j = 0; j < get_size(torreG); j++) {
            torreG[j] = preencher_torre_com_elementos_aleatorios(itens)
        }
        for (let k = 0; k < get_size(torreB); k++) {
            torreB[k] = preencher_torre_com_elementos_aleatorios(itens)
        }

        embaralhar_elementos(torreR)
        embaralhar_elementos(torreG)
        embaralhar_elementos(torreB)
    }
    return { torreR, torreG, torreB }
}

// funcao modificada para jogar uma rodada com torres especificas
// facilitar a inicialização de torres no menu para garantir que torres do jogador 1 e do jogador 2 sejam iguais
export function jogar_rodada_com_torres(torreR, torreG, torreB){
    let jogadas = 0

    while (!verificar_vitoria(torreR, torreG, torreB)){
        exibir_torres(torreR, torreG, torreB)

        // mostra menu para usuario escolher as operações que deseja efetuar entre as torres
        let operacao = exibir_opcoes(menu_operacoes_jogo(), '\nEscolha uma operação:')
        clear_screen()

        if (operacao === 1){
            mover_item(torreR, torreB)
        } else if (operacao === 2){
            mover_item(torreR, torreG)
        } else if (operacao === 3){
            mover_item(torreG, torreR)
        } else if (operacao === 4){
            mover_item(torreG, torreB)
        } else if (operacao === 5){
            mover_item(torreB, torreG)
        } else if (operacao === 6){
            mover_item(torreB, torreR)
        } else {
            print('\Operação inválida! Tente novamente ...\n')
        }
        jogadas = jogadas + 1
    }
    exibir_torres(torreR, torreG, torreB)
    print(`\nVocê concluiu o jogo em ${jogadas} jogadas!\n`)
    return jogadas
}

// funcao para verificar se todos os itens em um vetor sao iguais a um valor específico
function todos_elementos_iguais(torre, valor) {
    for (let item of torre) {
        if (item !== valor) {
            return false
        }
    }
    return true
}

// funcao para mover um item entre torres com pop
// export function mover_item(origem, destino){
//     if (get_size(origem) > 0){
//         let item = origem.pop()
//         meu_push(destino, item)
//     } else {
//         print('\nA torre de origem está vazia!\n')
//     }
// }

// funcao para mover um item entre torres com shift -> remover elemento do inicio do vetor de origem
// e adicioná-lo ao inicio do vetor de destino
export function mover_item(origem, destino){
    if (get_size(origem) > 0){
        let item = origem.shift()
        meu_unshift(destino, item)
    } else {
        print('\nA torre de origem está vazia!\n')
    }
}

// O jogo encerra quando cada torre tiver apenas itens do seu tipo, ou seja, a Torre R tem apenas itens R.
// funcao para verificar se o jogo foi vencido
export function verificar_vitoria(torreR, torreG, torreB) {
    const vitoria = todos_elementos_iguais(torreR, 'R') && todos_elementos_iguais(torreG, 'G') && todos_elementos_iguais(torreB, 'B')
    return vitoria
}

// funçao para exibir as torres
export function exibir_torres(torreR, torreG, torreB){
    exibe_elementos_vetor(torreR, '\nTorre R:\n')
    exibe_elementos_vetor(torreG, '\nTorre G:\n')
    exibe_elementos_vetor(torreB, '\nTorre B:\n')
}







