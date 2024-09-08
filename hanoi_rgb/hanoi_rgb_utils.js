// Hanói RGB Utils
import { get_texto, print } from "./my_entsai_utils.js"
import { exibe_elementos_vetor, gerar_vetor, get_size, meu_push } from "./my_vetores_utils.js"
import { texto_para_caixa_alta } from './my_string_utils.js'

// funcao para exibir menu de niveis do jogo
export function menu_niveis_jogo() {
    const opcoes = [
        '---------------------------------------------',    
        '        Bem-vindo ao Hanói RGB!             ',
        '---------------------------------------------',    
        '1 - Nível Básico', 
        '2 - Nível Intermediário',
        '3 - Nível Avançado',
        '0 - Sair do Jogo',
        '---------------------------------------------'
    ]
    return opcoes;
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
        torreR = gerar_vetor(quantidade_itens)
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

export function jogar_rodada(nivel){
    let qtd_itens = 9
    let { torreR, torreG, torreB } = inicializar_torres(qtd_itens, nivel)
    let jogadas = 0

    while (!verificar_vitoria(torreR, torreG, torreB)){
        exibir_torres(torreR, torreG, torreB)
        let torre_origem = texto_para_caixa_alta(get_texto('\nEscolha a torre de origem (R/G/B): ').trim())
        let torre_destino = texto_para_caixa_alta(get_texto('\nEscolha a torre de destino (R/G/B): ').trim())

        if (torre_origem == torre_destino){
            print('\nVocê não pode mover para a mesma torre!\n')
            continue
        }

        const origem_torre = { R: torreR, G: torreG, B: torreB }[torre_origem]
        const destino_torre = { R: torreR, G: torreG, B: torreB }[torre_destino]

        if (!origem_torre || !destino_torre) {
            alert('\nTorre inválida!\n')
            continue
        }

        mover_item(origem_torre, destino_torre)
        jogadas = jogadas + 1
    }
    exibir_torres(torreR, torreG, torreB)
    print(`\nParabéns! Você concluiu o jogo em ${jogadas} jogadas! :)\n`)
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

// funcao para mover um item entre torres
export function mover_item(origem, destino){
    if (get_size(origem) > 0){
        let item = origem.pop()
        meu_push(destino, item)
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







