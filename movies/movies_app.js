import { clear_screen, press_enter_to_continue, print, get_text, get_number } from './util/my_entsai_utils.js'
import { atualizar_filme, listar_filmes, cadastrar_filme, remover_filme, filtrar_filmes, mostra_quantidade_filmes_pais,
    ordenar_filmes, mostra_quantidade_filmes_genero, calcula_media_avaliacoes_genero, mostra_quantidade_filmes_idioma,
    filme_com_maior_bilheteira, filme_com_menor_bilheteira
} from "./movies_features.js"
import { obter_indice_filme, get_opcoes, menu_filmes_crud, escrever_filmes_arquivo, inicializacao,
    escreve_vetor_em_arquivo, cria_vetor_arquivo } from './movies_utils.js'
import { get_size, meu_push } from './util/my_collection_utils.js'
import { texto_para_caixa_baixa, texto_para_caixa_alta } from './util/my_string_utils.js'

function main(){
    let filmes = inicializacao()
    let opcao = -1

    while (opcao !== 0){
        clear_screen()
        let opcao = get_opcoes(menu_filmes_crud())

        if (opcao === 0){
            escreve_vetor_em_arquivo(filmes)
            clear_screen()
            print('Saindo ...')
            break

        // 1 - Cadastrar filme
        } else if (opcao === 1){
            clear_screen()
            let novo_filme = cadastrar_filme() 
            meu_push(filmes, novo_filme)
            print('\nFilme cadastrado com sucesso!\n')
            press_enter_to_continue()

        // 2 - Listar filmes
        } else if (opcao === 2){
            clear_screen()
            listar_filmes(filmes)
            press_enter_to_continue()

        // 3 - Atualizar filme
        } else if (opcao === 3){
            clear_screen()
            print('Escolha o índice do filme a ser atualizado:')
            let index = obter_indice_filme(filmes)
            print('Escolha o atributo que deseja atualizar:')
            atualizar_filme(index, filmes)
            escrever_filmes_arquivo(filmes)
            print('\nFilme atualizado com sucesso!')
            press_enter_to_continue()

        // 4 - Remover filme da lista
        } else if (opcao === 4){
            clear_screen()
            remover_filme(filmes)
            escrever_filmes_arquivo(filmes)
            press_enter_to_continue()         
            
        // 5 - Carregar de um arquivo
        } else if (opcao === 5){
            clear_screen()
            filmes = cria_vetor_arquivo()
            print('\nArquivo lido com sucesso!\n')
            press_enter_to_continue()       
            
        // 6 - Filtrar filmes por gênero
        } else if (opcao === 6){
            clear_screen()
            let genero_desejado = get_text('> Por qual gênero você deseja filtrar os filmes?\n')
            let filmes_filtrados = filtrar_filmes(filmes, 'genero', genero_desejado)
            if (get_size(filmes_filtrados) < 1){
                print('\nNenhum filme encontrado!\n')
            }
            print(filmes_filtrados)
            press_enter_to_continue()

        // 7 - Contar filmes por país
        } else if (opcao === 7){
            clear_screen()
            let quantidade_filmes = get_size(filmes)
            print(`\nTemos ${quantidade_filmes} filmes cadastrados no total!\n`)
            mostra_quantidade_filmes_pais(filmes)
            press_enter_to_continue()            

        // 8 - Filtrar filmes por parte do título
        } else if (opcao === 8){
            clear_screen()
            let parte_titulo = get_text('> Por qual parte do título você deseja filtrar os filmes?\n')
            let atributo_ordenacao = texto_para_caixa_baixa(get_text('> Por qual atributo você deseja ordenar os filmes filtrados?\n'))
            let tipo_ordenacao = texto_para_caixa_alta(get_text('> Qual o tipo de ordenação desejado? (ASC/DESC)\n'))
            let filmes_filtrados = filtrar_filmes(filmes, 'nome', parte_titulo)
            let filmes_ordenados = ordenar_filmes(filmes_filtrados, atributo_ordenacao, tipo_ordenacao)
            print(filmes_ordenados)
            press_enter_to_continue()

        // 9 - Contar filmes por gênero
        } else if (opcao === 9){
            clear_screen()
            let quantidade_filmes = get_size(filmes)
            print(`\nTemos ${quantidade_filmes} filmes cadastrados no total!\n`)
            mostra_quantidade_filmes_genero(filmes)
            press_enter_to_continue()      

        // 10 - Média de avaliações por gênero
        } else if (opcao === 10){
            clear_screen()
            let quantidade_filmes = get_size(filmes)
            print(`\nTemos ${quantidade_filmes} filmes cadastrados no total!\n`)
            calcula_media_avaliacoes_genero(filmes)
            press_enter_to_continue()  
            
        // 11 - Filtrar filmes por ano
        } else if (opcao === 11){
            clear_screen()
            let ano_desejado = get_number('> Por qual ano você deseja filtrar os filmes?\n')
            let filmes_filtrados = filtrar_filmes(filmes, 'ano', ano_desejado)
            if (get_size(filmes_filtrados) < 1){
                print('\nNenhum filme encontrado!\n')
            }
            print(filmes_filtrados)
            press_enter_to_continue()

        // 12 - Filme com maior bilheteria
        } else if (opcao === 12){
            clear_screen()
            let filme_maior_bilheteria = filme_com_maior_bilheteira(filmes)
            print(filme_maior_bilheteria)
            press_enter_to_continue()

        // 13 - Filme com menor bilheteria
        } else if (opcao === 13){
            clear_screen()
            let filme_menor_bilheteria = filme_com_menor_bilheteira(filmes)
            print(filme_menor_bilheteria)
            press_enter_to_continue()

        // 14 - Contar filmes por idioma
        } else if (opcao === 14){
            clear_screen()
            let quantidade_filmes = get_size(filmes)
            print(`\nTemos ${quantidade_filmes} filmes cadastrados no total!\n`)
            mostra_quantidade_filmes_idioma(filmes)
            press_enter_to_continue()      

        // 15 - Filtrar filmes por idioma
        } else if (opcao === 15){
            clear_screen()
            let idioma_desejado = get_text('> Por qual idioma você deseja filtrar os filmes?\n')
            let filmes_filtrados = filtrar_filmes(filmes, 'idioma', idioma_desejado)
            if (get_size(filmes_filtrados) < 1){
                print('\nNenhum filme encontrado!\n')
            }
            print(filmes_filtrados)
            press_enter_to_continue()
        }
    }
}

main()