import {get_numero_positivo, get_numero_min, exibir_opcoes, exibe_texto, clear_screen, press_enter_to_continue, get_number, get_texto } from './io_utils.js'
import {resetar_vetor, obter_posicao_maior_valor, obter_posicao_menor_valor, obter_maior_valor, obter_menor_valor, gerar_novo_vetor, 
    preencher_vetor_automaticamente, preencher_vetor, obter_somatorio_valores, obter_media_valores, conta_quantidade_valores_positivos,
    mostra_valores_positivos, conta_quantidade_valores_negativos, mostra_valores_negativos, multiplicar_valores, exponencia_elementos,
    reduzir_todos_elementos, substituir_valores_negativos_por_aleatorios, ordenar_valores_sort, adiciona_valores, remove_valor, 
    remove_valor_por_posicao, atualizar_valor, preencher_vetor_min_max
} from './vetor_funcionalidades.js'
import {cria_vetor_numerico_arquivo, escreve_vetor_em_arquivo, exibe_elementos_vetor, get_size, menu, menu_update} from './vetor_utils.js'

function main(){
    let opcao = -1
    let vetor = []
    
    while (opcao !== 0){
        clear_screen()
        opcao = exibir_opcoes(menu())

        // 0 - Sair
        if (opcao == 0){
            escreve_vetor_em_arquivo(vetor)
            clear_screen()
            exibe_texto('Encerrando programa...')
            break

        // 1 - Inicializar Vetor Numérico
        } else if (opcao == 1){
            clear_screen()
            let tamanho = get_numero_positivo('Qual o tamanho do vetor?\n')
            vetor = gerar_novo_vetor(tamanho)
            exibe_texto('\nVetor criado com sucesso!\n')
            press_enter_to_continue()

        // 2 - Preencher vetor manualmente em intervalo
        } else if (opcao == 2){
            clear_screen()
            let valor_min = get_number('Qual o valor mínimo desejado?\n')
            let valor_max = get_numero_min('Qual o valor máximo desejado?\n', valor_min + 1)
            vetor = preencher_vetor_min_max(vetor, valor_min, valor_max)
            exibe_elementos_vetor(vetor, '\nVetor preenchido com sucesso!\n\n')
            press_enter_to_continue()

        // 3 - Preencher vetor manualmente
        } else if (opcao == 3){
            clear_screen()
            vetor = preencher_vetor(vetor)
            exibe_elementos_vetor(vetor, '\nVetor preenchido com sucesso!\n\n')
            press_enter_to_continue()
        
        // 4 - Preencher vetor automaticamente
        } else if (opcao == 4){
            clear_screen()
            let valor_min = get_number('Qual o valor mínimo desejado?\n')
            let valor_max = get_numero_min('Qual o valor máximo desejado?\n', valor_min + 1)
            vetor = preencher_vetor_automaticamente(vetor, valor_min, valor_max)
            exibe_elementos_vetor(vetor, '\nVetor preenchido com sucesso!\n')
            press_enter_to_continue()

        // 5 - Mostrar vetor
        } else if (opcao == 5){
            clear_screen()
            exibe_elementos_vetor(vetor, '\nVetor atual:\n')
            press_enter_to_continue()

        // 6 - Resetar vetor
        } else if (opcao == 6){
            clear_screen()
            let valor_padrao = get_numero_positivo('Qual o valor padrão?\n')
            vetor = resetar_vetor(vetor, valor_padrao)
            exibe_elementos_vetor(vetor, '\nVetor resetado com valor padrão:\n')
            press_enter_to_continue()

        // 7 - Ver quantidade de itens no vetor
        } else if (opcao == 7){
            clear_screen()
            let tamanho_vetor = get_size(vetor)
            exibe_texto(`\nTamanho do vetor = ${tamanho_vetor}\n`)
            press_enter_to_continue()

        // 8 - Ver menor e maior valores e suas posições
        } else if (opcao == 8){
            clear_screen()
            let maior_valor = obter_maior_valor(vetor)
            let menor_valor = obter_menor_valor(vetor)
            let posicao_maior = obter_posicao_maior_valor(vetor)
            let posicao_menor = obter_posicao_menor_valor(vetor)
            exibe_texto(`\nMaior valor do vetor = ${maior_valor} -> Posição = ${posicao_maior}\n`)
            exibe_texto(`\nMenor valor do vetor = ${menor_valor} -> Posição = ${posicao_menor}\n`)
            exibe_elementos_vetor(vetor, '\nVetor:\n')
            press_enter_to_continue()

        // 9 - Somatório dos valores
        } else if (opcao == 9){
            clear_screen()
            let somatorio = obter_somatorio_valores(vetor)
            exibe_texto(`\nSomatório dos valores = ${somatorio.toFixed(2)}\n`)
            press_enter_to_continue()

        // 10 - Média dos valores
        } else if (opcao == 10){
            clear_screen()
            let media = obter_media_valores(vetor)
            exibe_texto(`\nMédia dos valores = ${media.toFixed(2)}\n`)
            press_enter_to_continue()
        
        // 11 - Mostrar valores positivos e quantidade
        } else if (opcao == 11){
            clear_screen()
            let quantidade = conta_quantidade_valores_positivos(vetor)
            let valores_positivos = mostra_valores_positivos(vetor)
            exibe_texto(`\nQuantidade de valores positivos = ${quantidade}\n`)
            exibe_texto(`\nValores positivos: ${valores_positivos}\n`)
            press_enter_to_continue()

        // 12 - Mostrar valores negativos e quantidade
        } else if (opcao == 12){
            clear_screen()
            let quantidade = conta_quantidade_valores_negativos(vetor)
            let valores_negativos = mostra_valores_negativos(vetor)
            exibe_texto(`\nQuantidade de valores negativos = ${quantidade}\n`)
            exibe_texto(`\nValores negativos: ${valores_negativos}\n`)
            press_enter_to_continue()

        // 13 - Atualizar todos os valores por regras 
        } else if (opcao == 13) {
            clear_screen()
            let op = -1
        
            while (op !== 0) {
                clear_screen()
                op = exibir_opcoes(menu_update())  
        
                // 0 - Sair
                if (op == 0) {
                    clear_screen()
                    exibe_texto('Saindo...')
                    break

                // 1 - Multiplicar por um valor
                } else if (op == 1) {
                    clear_screen()
                    exibe_elementos_vetor(vetor, '\nVetor atual:\n')
                    exibe_texto(`\n`)
                    let valor = get_number('Por qual valor você deseja multiplicar cada um dos elementos do vetor?\n') 
                    vetor = multiplicar_valores(vetor, valor)
                    exibe_elementos_vetor(vetor, '\nVetor multiplicado:\n')
                    press_enter_to_continue()
                
                // 2 - Elevar a um valor (exponenciação)
                } else if (op == 2) {
                    clear_screen()
                    exibe_elementos_vetor(vetor, '\nVetor atual:\n')
                    exibe_texto(`\n`)
                    let expoente = get_number('A qual expoente você deseja elevar cada um dos elementos do vetor?\n')
                    vetor = exponencia_elementos(vetor, expoente)
                    exibe_elementos_vetor(vetor, '\nVetor exponenciado:\n')
                    press_enter_to_continue()
        
                // 3 - Reduzir a uma fração (pedir a fração fração ex: 1⁄5)
                } else if (op == 3) {
                    clear_screen()
                    exibe_elementos_vetor(vetor, '\nVetor atual:\n')
                    let numerador = get_number('\nQual numerador da fração você deseja reduzir cada um dos elementos do vetor?\n')
                    let denominador = get_number('\nQual denominador da fração você deseja reduzir cada um dos elementos do vetor?\n')
                    vetor = reduzir_todos_elementos(vetor, numerador, denominador)
                    exibe_elementos_vetor(vetor, '\nVetor reduzido:\n')
                    press_enter_to_continue()
        
                // 4 - Substituir valores negativos por um número aleatórios da uma faixa(min, max)
                } else if (op == 4) {
                    clear_screen()
                    exibe_elementos_vetor(vetor, '\nVetor atual:\n')
                    let valor_min = get_number('Qual o valor mínimo desejado?\n')
                    let valor_max = get_numero_min('Qual o valor máximo desejado?\n', valor_min + 1)
                    vetor = substituir_valores_negativos_por_aleatorios(vetor, valor_min, valor_max)
                    exibe_elementos_vetor(vetor, '\nVetor modificado (se houver algum valor inicial negativo):\n')
                    press_enter_to_continue()
        
                // 5 - Ordenar valores 
                } else if (op == 5) {
                    clear_screen()
                    exibe_elementos_vetor(vetor, '\nVetor atual:\n')
                    vetor = ordenar_valores_sort(vetor)
                    exibe_elementos_vetor(vetor, '\nVetor ordenado:\n')
                    press_enter_to_continue()
                    
                } 
            }
        
        // 14 - Adicionar novos valores
        } else if (opcao == 14){
            clear_screen()
            let qtd_valores = get_numero_positivo('Quantos valores você deseja adicionar ao vetor?\n')
            vetor = adiciona_valores(vetor, qtd_valores)
            exibe_elementos_vetor(vetor, '\nVetor:\n')
            press_enter_to_continue()

        // 15 - Remover itens por valor exato
        } else if (opcao == 15){
            clear_screen()
            exibe_elementos_vetor(vetor, '\nVetor atual:\n')
            let valor = get_number('\nQual valor você deseja remover do vetor?\n')
            vetor = remove_valor(vetor, valor)
            exibe_elementos_vetor(vetor, '\nVetor:\n')
            press_enter_to_continue() 

        // 16 - Remover por posição
        } else if (opcao == 16){
            clear_screen()
            exibe_elementos_vetor(vetor, '\nVetor atual:\n')
            let posicao = get_number('\nDe qual posição você deseja remover o valor?\n')
            vetor = remove_valor_por_posicao(vetor, posicao)
            exibe_elementos_vetor(vetor, '\nVetor:\n')
            press_enter_to_continue() 

        // 17 - Editar valor específico por posição
        } else if (opcao == 17){
            clear_screen()
            exibe_elementos_vetor(vetor, '\nVetor atual:\n')
            let posicao = get_number('\nDe qual posição você deseja atualizar o valor?\n')
            vetor = atualizar_valor(vetor, posicao)
            exibe_elementos_vetor(vetor, '\nVetor:\n')
            press_enter_to_continue() 

        // 18 - Salvar valores em arquivo
        } else if (opcao == 18){
            clear_screen()
            escreve_vetor_em_arquivo(vetor)
            exibe_texto('\Arquivo salvo!\n')
            press_enter_to_continue()

        // 19 - Ler dados de um arquivo
        } else if (opcao == 19){
            clear_screen()
            vetor = cria_vetor_numerico_arquivo()
            exibe_texto('\nArquivo lido com sucesso!\n')
            press_enter_to_continue()

        }
    }
}

main()