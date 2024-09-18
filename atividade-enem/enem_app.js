import { melhor_escola_por_estado, top_n_brasil_todas_areas, mostrar_ranking_estados_por_media, top_n_escolas_estado_rede,
    mostrar_dados_melhor_escola, mostrar_top_n_escolas_por_area, media_nacional_por_area, obter_melhor_escola_por_area_e_estado, 
    listar_escolas_por_estado_e_renda, ranking_enem_por_regiao, busca_escola_especifica_por_parte_nome,
    media_por_tipo_escola,
    conta_escolas_por_renda
 } from "./enem_features.js"
import { get_opcoes, inicializa_escolas, menu_enem, mostrar_escolas, mostrar_melhor_escola_por_estado, obter_indice_estados,
    mostrar_escola,
    mostrar_medias_por_tipo,
    exibir_contagem_escolas_por_renda
 } from "./enem_utils.js"
import { clear_screen, get_number_in_range, get_positive_number, get_texto, press_enter_to_continue, print } from "./util/my_entsai_utils.js"

function main(){
    let escolas = inicializa_escolas()
    let opcao = -1

    while (opcao !== 0){
        clear_screen()
        opcao = get_opcoes(menu_enem())

        if (opcao === 0){
            clear_screen()
            print('Saindo ...')
            break
        
        // 1 - Top N Escolas Brasil (todas as áreas)
        } else if (opcao === 1){
            clear_screen()
            let quantidade_escolas = get_positive_number('Quantas escolas você deseja listar para o Top N Brasil em todas as áreas do ENEM?\n')
            const escolas_top_n_escolas = top_n_brasil_todas_areas(quantidade_escolas, escolas)
            print(`\n>>> Top ${quantidade_escolas} Escolas Brasil em Todas as Áreas <<<`)
            mostrar_escolas(escolas_top_n_escolas)
            press_enter_to_continue()

        // 2 - Melhor Escola por Estado
        } else if (opcao === 2){
            clear_screen()
            let melhores_escolas = melhor_escola_por_estado(escolas)
            mostrar_melhor_escola_por_estado(melhores_escolas)
            press_enter_to_continue()

        // 3 - Ranking ENEM por Estado
        } else if (opcao === 3){
            clear_screen()
            mostrar_ranking_estados_por_media(escolas)
            press_enter_to_continue()

        // 4 - Top N Escolas por Área
        } else if (opcao === 4){
            clear_screen()
            let quantidade_escolas = get_positive_number('Quantas escolas você deseja listar para o Top N Escolas por Área no ENEM?\n')
            print('\nEscolha uma das áreas a seguir:')
            let texto = '\t1 - Linguagens\n\t2 - Matemática\n\t3 - Ciências da Natureza\n\t4 - Ciências Humanas\n\t5 - Redação\n> '
            let area_escolhida = get_number_in_range(texto, 1, 5)
            mostrar_top_n_escolas_por_area(escolas, quantidade_escolas, area_escolhida)
            press_enter_to_continue()

        // 5 - Top N Escolas por Estado e Rede
        } else if (opcao === 5){
            clear_screen()
            let quantidade_escolas = get_positive_number('Quantas escolas você deseja listar para o Top N Escolas por Estado e Rede?\n')
            let indice = obter_indice_estados(escolas)
            print('\nEscolha um dos tipos de rede a seguir:')
            let texto = '\t1 - Rede Pública\n\t2 - Rede Privada\n> '
            let rede_escolhida = get_number_in_range(texto, 1, 2)
            let escolas_filtradas = top_n_escolas_estado_rede(quantidade_escolas, escolas, indice, rede_escolhida)
            mostrar_escolas(escolas_filtradas)
            press_enter_to_continue()

        // 6 - Média Nacional por Área
        } else if (opcao === 6){
            clear_screen()
            media_nacional_por_area(escolas)
            press_enter_to_continue()

        // 7 - Melhor Escola por Área e Estado
        } else if (opcao === 7){
            clear_screen()
            let indice_estado = obter_indice_estados(escolas)
            print('\nEscolha uma das áreas a seguir:')
            let texto = '\t1 - Linguagens\n\t2 - Matemática\n\t3 - Ciências da Natureza\n\t4 - Ciências Humanas\n\t5 - Redação\n> '
            let area_escolhida = get_number_in_range(texto, 1, 5)
            let melhor_escola = obter_melhor_escola_por_area_e_estado(escolas, area_escolhida, indice_estado)
            mostrar_dados_melhor_escola(melhor_escola, area_escolhida)
            press_enter_to_continue()

        // 8 - Listas de Escolas por Estado Ordenada por Renda
        } else if (opcao === 8){
            clear_screen()
            let indice_estado = obter_indice_estados(escolas)
            listar_escolas_por_estado_e_renda(escolas, indice_estado)
            press_enter_to_continue()

        // 9 - Ranking ENEM por Região do País
        } else if (opcao === 9){
            clear_screen()
            ranking_enem_por_regiao(escolas)
            press_enter_to_continue()

        // 10 - Busca Escola Específica por Parte do Nome
        } else if (opcao === 10){
            clear_screen()
            let parte_nome = get_texto('Por qual parte do nome de escola você deseja filtrar a escola procurada?\n')
            let escola = busca_escola_especifica_por_parte_nome(escolas, parte_nome)
            mostrar_escola(escola)
            press_enter_to_continue()

        // 11 - Compara Média por tipos de escola
        } else if (opcao === 11){
            clear_screen()
            let media_tipos = media_por_tipo_escola(escolas)
            mostrar_medias_por_tipo(media_tipos)
            press_enter_to_continue()

        // 12 - Quantidade de Escolas por Renda
        } else if (opcao === 12){
            clear_screen()
            let qtd_escolas_por_renda = conta_escolas_por_renda(escolas)
            exibir_contagem_escolas_por_renda(qtd_escolas_por_renda)
            press_enter_to_continue()
        } else {
            clear_screen()
            print('Opção inválida!')
            press_enter_to_continue()
        }
    }
}

main()