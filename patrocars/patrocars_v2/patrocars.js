import { print, press_enter_to_continue, clear_screen, get_number_in_range, get_texto, get_number } from './util/my_entsai_utils.js'
import { inicializa_modelos, get_opcoes, menu_modelos, escrever_modelos_arquivo } from './patrocars_utils.js'
import { cadastrar_modelo, listar_modelos, filtrar_modelos, remover_modelo, obter_indice_modelo, atualizar_modelo } from './patrocars_funcionalidades.js'
import { texto_para_caixa_alta, texto_para_caixa_baixa } from './util/my_string_utils.js'
import { meu_push } from './util/my_vetores_utils.js'
import { inicializa_montadoras } from '../patrocars_v1/patrocars_funcionalidades.js'

function main(){
    let montadoras = inicializa_montadoras()
    let modelos = inicializa_modelos()
    let opcao = -1

    while (opcao !== 0){
        clear_screen()
        opcao = get_opcoes(menu_modelos())

        // 0 - Sair
        if (opcao === 0){
            escrever_modelos_arquivo(modelos)
            clear_screen()
            print('Saindo ...')
            break

        // 1 - Cadastrar modelo
        } else if (opcao === 1){
            clear_screen()
            print('*** O id do modelo é gerado automaticamente ***\n')
            let novo_modelo = cadastrar_modelo(montadoras)
            meu_push(modelos, novo_modelo)
            print('\nModelo cadastrado com sucesso!\n')
            press_enter_to_continue()

        // 2 - Listar modelos
        } else if (opcao === 2){
            clear_screen()
            print('Escolha uma das opções a seguir:')
            let texto = '----------------------------------\n1 - Listar todos\n2 - Listar modelos por montadora\n3 - Listar modelos ordenados\n----------------------------------\n> '
            let escolha = get_number_in_range(texto, 1, 3)
            // print('\nEscolha a montadora da qual deseja listar os modelos:\n')
            listar_modelos(modelos, escolha)
            press_enter_to_continue()

        // 3 - Filtrar modelos por critério
        } else if (opcao === 3){
            clear_screen()
            print('\nEscolha o critério pelo qual deseja filtrar os modelos:')
            let texto = '----------------------------------\n1 - Parte do nome do modelo\n2 - Automático ou não\n3 - Motor\n4 - Parte do nome da montadora\n----------------------------------\n> '
            let escolha = get_number_in_range(texto, 1, 4)

            if (escolha === 1){
                let parte_nome = get_texto('\n> Por qual parte do nome do modelo você deseja filtrar os modelos?\n')
                let modelos_filtrados = filtrar_modelos(modelos, 'nome', parte_nome)
                print(modelos_filtrados)

            } else if (escolha === 2){
                let automatico = get_texto('\n> Automático? (Sim/Não)\n')
                let modelos_filtrados = filtrar_modelos(modelos, 'automatico', automatico)
                print(modelos_filtrados)

            } else if (escolha === 3){
                let motorizacao = parseFloat(get_number('\n> Por qual valor de motorização você deseja filtrar?\n'))
                let modelos_filtrados = filtrar_modelos(modelos, 'motorizacao', motorizacao)
                print(modelos_filtrados)

            } else {
                let montadora = get_texto('\n> Por qual parte do nome da montadora você deseja filtrar os modelos?\n')
                let modelos_filtrados = filtrar_modelos(modelos, 'montadora_escolhida', montadora)
                print(modelos_filtrados)
            }
            press_enter_to_continue()

        // 4 - Atualizar modelo
        // Escolher o veículo a editar
        // Mostrar cada valor atual dos atributos e então pedir novo valor, se não fornecer novo valor manter valor atual
        } else if (opcao === 4){
            clear_screen()
            print('Escolha o índice do modelo a ser atualizado:\n')
            let indice = obter_indice_modelo(modelos)
            print('\nEscolha o atributo que deseja atualizar:\n')
            atualizar_modelo(indice, modelos)
            escrever_modelos_arquivo(modelos)
            press_enter_to_continue()

        // 5 - Remover modelo
        // Listar e pedir para selecionar qual deseja remover
        } else if (opcao === 5){
            clear_screen()
            remover_modelo(modelos)
            escrever_modelos_arquivo(modelos)
            press_enter_to_continue()

        }
    }

}

main()