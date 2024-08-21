import {get_numero_positivo, get_numero_min, exibir_opcoes, exibe_texto, clear_screen, press_enter_to_continue, get_number } from './io_utils.js'
import {resetar_vetor, obter_posicao_maior_valor, obter_posicao_menor_valor, obter_maior_valor, obter_menor_valor, gerar_novo_vetor, 
    preencher_vetor_automaticamente, preencher_vetor, obter_somatorio_valores, obter_media_valores, conta_quantidade_valores_positivos,
    mostra_valores_positivos, conta_quantidade_valores_negativos, mostra_valores_negativos, multiplicar_valores, exponencia_elementos,
    reduzir_todos_elementos, substituir_valores_negativos_por_aleatorios, ordenar_valores_sort, adiciona_valores,
    remove_valor
} from './vetor_funcionalidades.js'
import {get_size} from './vetor_utils.js'

function main(){
    let opcao = -1
    let vetor = []
    
    while (opcao !== 0){
        clear_screen()
        opcao = exibir_opcoes(menu())

        // 0 - Sair
        if (opcao == 0){
            clear_screen()
            exibe_texto('Encerrando programa...')
            break

        } else if (opcao == 1){
            clear_screen()
            let tamanho = get_numero_positivo('Qual o tamanho do vetor?\n')
            vetor = gerar_novo_vetor(tamanho)
            exibe_texto('Vetor criado!')
            exibe_texto('\n')
            press_enter_to_continue()

        } else if (opcao == 2){
            clear_screen()
            vetor = preencher_vetor(vetor)
            exibe_texto(`\nVetor preenchido: ${vetor}\n`)
            press_enter_to_continue()

        } else if (opcao == 3){
            clear_screen()
            let valor_min = get_number('Qual o valor mínimo desejado?\n')
            let valor_max = get_numero_min('Qual o valor máximo desejado?\n', valor_min + 1)
            vetor = preencher_vetor_automaticamente(vetor, valor_min, valor_max)
            exibe_texto(`\nVetor preenchido: ${vetor}\n`)
            press_enter_to_continue()

        } else if (opcao == 4){
            clear_screen()
            exibe_texto(`Vetor atual: ${vetor}\n`)
            press_enter_to_continue()

        } else if (opcao == 5){
            clear_screen()
            let valor_padrao = get_numero_positivo('Qual o valor padrão?\n')
            vetor = resetar_vetor(vetor, valor_padrao)
            exibe_texto(`\nVetor resetado com valor padrão: ${vetor}\n`)
            press_enter_to_continue()

        } else if (opcao == 6){
            clear_screen()
            let tamanho_vetor = get_size(vetor)
            exibe_texto(`\nTamanho do vetor = ${tamanho_vetor}\n`)
            press_enter_to_continue()

        } else if (opcao == 7){
            clear_screen()
            let maior_valor = obter_maior_valor(vetor)
            let menor_valor = obter_menor_valor(vetor)
            let posicao_maior = obter_posicao_maior_valor(vetor)
            let posicao_menor = obter_posicao_menor_valor(vetor)
            exibe_texto(`\nMaior valor do vetor = ${maior_valor}\n`)
            exibe_texto(`\nPosição do maior valor = ${posicao_maior}\n`)
            exibe_texto(`\nMenor valor do vetor = ${menor_valor}\n`)
            exibe_texto(`\nPosição do menor valor = ${posicao_menor}\n`)
            exibe_texto(`\nVetor: ${vetor}\n`)
            press_enter_to_continue()

        } else if (opcao == 8){
            clear_screen()
            let somatorio = obter_somatorio_valores(vetor)
            exibe_texto(`\nSomatório dos valores = ${somatorio}\n`)
            press_enter_to_continue()

        } else if (opcao == 9){
            clear_screen()
            let media = obter_media_valores(vetor)
            exibe_texto(`\nMédia dos valores = ${media.toFixed(2)}\n`)
            press_enter_to_continue()

        } else if (opcao == 10){
            clear_screen()
            let quantidade = conta_quantidade_valores_positivos(vetor)
            let valores_positivos = mostra_valores_positivos(vetor)
            exibe_texto(`\nQuantidade de valores positivos = ${quantidade}\n`)
            exibe_texto(`\nValores positivos: ${valores_positivos}\n`)
            press_enter_to_continue()

        } else if (opcao == 11){
            clear_screen()
            let quantidade = conta_quantidade_valores_negativos(vetor)
            let valores_negativos = mostra_valores_negativos(vetor)
            exibe_texto(`\nQuantidade de valores negativos = ${quantidade}\n`)
            exibe_texto(`\nValores negativos: ${valores_negativos}\n`)
            press_enter_to_continue()

        } else if (opcao == 12){
            clear_screen()
            let valor = get_number('Por qual valor você deseja multiplicar cada um dos elementos do vetor?\n') 
            vetor = multiplicar_valores(vetor, valor)
            exibe_texto(`\nVetor multiplicado: ${vetor}\n`) 
            let expoente = get_number('A qual expoente você deseja elevar cada um dos elementos do vetor?\n')
            vetor = exponencia_elementos(vetor, expoente)
            exibe_texto(`\nVetor exponenciado: ${vetor}\n`) 
            let numerador = get_number('Qual numerador da fração você deseja reduzir cada um dos elementos do vetor?\n')
            let denominador = get_number('Qual denominador da fração você deseja reduzir cada um dos elementos do vetor?\n')
            vetor = reduzir_todos_elementos(vetor, numerador, denominador)
            exibe_texto(`\nVetor reduzido: ${vetor}\n`) 
            let valor_min = get_number('Qual o valor mínimo desejado?\n')
            let valor_max = get_numero_min('Qual o valor máximo desejado?\n', valor_min + 1)
            vetor = substituir_valores_negativos_por_aleatorios(vetor, valor_min, valor_max)
            exibe_texto(`\nVetor modificado: ${vetor}\n`) 
            vetor = ordenar_valores_sort(vetor)
            exibe_texto(`\nVetor ordenado: ${vetor}\n`) 
            // vetor = embaralhar_valores(vetor)
            // exibe_texto(`\nVetor embaralhado: ${vetor}\n`) 
            press_enter_to_continue()

        } else if (opcao == 13){
            clear_screen()
            let qtd_valores = get_numero_positivo('Quantos valores você deseja adicionar ao vetor?\n')
            vetor = adiciona_valores(vetor, qtd_valores)
            exibe_texto(`\nVetor: ${vetor}\n`) 
            press_enter_to_continue()

        } else if (opcao == 14){
            clear_screen()
            exibe_texto(`\nVetor atual: ${vetor}\n`)
            let valor = get_number('Qual valor você deseja remover do vetor?\n')
            vetor = remove_valor(vetor, valor)
            exibe_texto(`\nVetor: ${vetor}\n`)
            press_enter_to_continue() 

        } else if (opcao == 15){
            clear_screen()
            exibe_texto(`\nVetor atual: ${vetor}\n`)
            let posicao = get_number('De qual posição você deseja remover o valor?\n')

        }
    }
}

function menu() {
    let opcoes = [
        '----------------------------------------------------',  
        '=================== PLAY NUMBER ====================',
        '----------------------------------------------------',    
        '1 - Gerar vetor de tamanho N',
        '2 - Preencher vetor manualmente',  
        '3 - Preencher vetor automaticamente', 
        '4 - Mostrar vetor', 
        '5 - Resetar vetor',
        '6 - Ver quantidade de itens no vetor',
        '7 - Ver menor e maior valores e suas posições',  
        '8 - Somatório dos valores', 
        '9 - Média dos valores',  
        '10 - Mostrar valores positivos e quantidade', 
        '11 - Mostrar valores negativos e quantidade',  
        '12 - Atualizar todos os valores por regras', 
        '13 - Adicionar novos valores', 
        '14 - Remover itens por valor exato',
        '15 - Remover por posição', 
        '0 - Sair',
        '----------------------------------------------------']
    return opcoes
} 

main()