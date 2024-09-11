import { get_opcoes, menu_montadoras, configurar_montadora, ler_vetor_arquivo, escrever_montadoras_arquivo } from "./patrocars_utils.js"
import { atualizar_montadora, filtrar_montadoras, inicializa_montadoras, mostrar_montadoras, 
    mostrar_quantidade_montadoras_por_pais, obter_indice_montadora, ordenar_montadoras, remover_montadora } from './patrocars_funcionalidades.js'
import { clear_screen, get_positive_number, get_texto, press_enter_to_continue, print } from "./util/my_entsai_utils.js"
import { texto_para_caixa_alta, texto_para_caixa_baixa } from './util/my_string_utils.js'
import { get_size, meu_push } from "./util/my_vetores_utils.js"
import { ulid } from 'ulidx'

function main(){
    let montadoras = inicializa_montadoras()
    let opcao = -1

    while (opcao !== 0){
        clear_screen()
        opcao = get_opcoes(menu_montadoras())

        // 0 - Sair
        if (opcao === 0){
            escrever_montadoras_arquivo(montadoras)
            clear_screen()
            print('Saindo ...')
            break

        // 1 - Cadastrar montadora
        } else if (opcao === 1){
            clear_screen()
            print('>>> O id da montadora é gerado automaticamente <<<\n')
            let id_montadora = ulid()
            let nome = get_texto('> Qual o nome da montadora?\n')
            let pais = get_texto(`> Qual o país onde surgiu a ${nome}?\n`)
            let ano_fundacao = get_positive_number(`> Qual o ano de fundação da ${nome}?\n`)
            let montadora = configurar_montadora(id_montadora, nome, pais, ano_fundacao)
            meu_push(montadoras, montadora)
            print('\nMontadora cadastrada com sucesso!\n')
            press_enter_to_continue()

        // 2 - Listar montadoras
        // Ao listar todas ou filtrar, sempre perguntar se desejar ordenar por qual atributo 
        // e ainda se ASC ou DESC (nome, pais, ano_funcacao)
        } else if (opcao === 2){
            clear_screen()
            let escolha = texto_para_caixa_alta(get_texto('> Deseja listar as montadoras de forma ordenada? (S/N)\n'))

            if (escolha == 'S'){
                let atributo_ordenacao = texto_para_caixa_baixa(get_texto('> Por qual atributo você deseja ordenar as montadoras?\n'))
                let tipo_ordenacao = texto_para_caixa_alta(get_texto('> Qual o tipo de ordenação desejado? (ASC/DESC)\n'))
                let montadora_ordenadas = ordenar_montadoras(montadoras, atributo_ordenacao, tipo_ordenacao)
                print('\nMontadoras Ordenadas:\n')
                print(montadora_ordenadas)
            } else {
                mostrar_montadoras(montadoras)
            }
            press_enter_to_continue()

        // 3 - Atualizar montadora por índice na lista de montadoras
        } else if (opcao === 3){
            clear_screen()
            print('Escolha o índice da montadora a ser atualizada:')
            let indice = obter_indice_montadora(montadoras)
            print('Escolha o atributo que deseja atualizar:')
            atualizar_montadora(indice, montadoras)
            escrever_montadoras_arquivo(montadoras)
            print('\nMontadora atualizada com sucesso!\n')
            press_enter_to_continue()

        // 4 - Remover montadora da lista
        } else if (opcao === 4){
            clear_screen()
            remover_montadora(montadoras)
            escrever_montadoras_arquivo(montadoras)
            press_enter_to_continue()

        // 5 - Status 
        } else if (opcao === 5){
            clear_screen()
            let quantidade_montadora = get_size(montadoras)
            print(`\nTemos ${quantidade_montadora} montadoras cadastradas no total!\n`)
            mostrar_quantidade_montadoras_por_pais(montadoras)
            press_enter_to_continue()

        // 6 - Filtrar montadora por parte do nome
        // Ao listar todas ou filtrar, sempre perguntar se desejar ordenar por qual atributo 
        // e ainda se ASC ou DESC (nome, pais, ano_funcacao)
        } else if (opcao === 6){
            clear_screen()
            let parte_nome = get_texto('> Por qual parte do nome você deseja filtrar as montadoras?\n')
            let atributo_ordenacao = texto_para_caixa_baixa(get_texto('> Por qual atributo você deseja ordenar as montadoras filtradas?\n'))
            let tipo_ordenacao = texto_para_caixa_alta(get_texto('> Qual o tipo de ordenação desejado? (ASC/DESC)\n'))
            let montadoras_filtradas = filtrar_montadoras(montadoras, 'nome', parte_nome)
            let montadora_ordenadas = ordenar_montadoras(montadoras_filtradas, atributo_ordenacao, tipo_ordenacao)
            print(montadora_ordenadas)
            press_enter_to_continue()

        // 7 - Filtrar montadora por parte do nome do país
        // Ao listar todas ou filtrar, sempre perguntar se desejar ordenar por qual atributo 
        // e ainda se ASC ou DESC (nome, pais, ano_funcacao)
        } else if (opcao === 7){
            clear_screen()
            let parte_nome_pais = get_texto('> Por qual parte do nome do país você deseja filtrar as montadoras?\n')
            let atributo_ordenacao = texto_para_caixa_baixa(get_texto('> Por qual atributo você deseja ordenar as montadoras filtradas?\n'))
            let tipo_ordenacao = texto_para_caixa_alta(get_texto('> Qual o tipo de ordenação desejado? (ASC/DESC)\n'))
            let montadoras_filtradas = filtrar_montadoras(montadoras, 'pais', parte_nome_pais)
            let montadora_ordenadas = ordenar_montadoras(montadoras_filtradas, atributo_ordenacao, tipo_ordenacao)
            print(montadora_ordenadas)
            press_enter_to_continue()

        // 8 - Carregar dados de um arquivo
        } else if (opcao === 8){
            clear_screen()
            montadoras = ler_vetor_arquivo()
            print('\nArquivo lido com sucesso!\n')
            press_enter_to_continue()
        }
    }
}

main()