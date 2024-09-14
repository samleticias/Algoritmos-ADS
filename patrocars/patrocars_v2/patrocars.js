import { print, press_enter_to_continue, clear_screen, get_number_in_range, get_texto, get_number } from './util/my_entsai_utils.js'
import { inicializa_modelos, get_opcoes, menu_modelos, escrever_modelos_arquivo } from './patrocars_utils.js'
import { cadastrar_modelo, listar_modelos, filtrar_modelos, remover_modelo, obter_indice_modelo, atualizar_modelo, mostrar_modelos, ordenar_modelos, get_atributos_para_ordenacao, obter_indice_montadora } from './patrocars_funcionalidades.js'
import { get_size, meu_push } from './util/my_vetores_utils.js'
import { inicializa_montadoras } from '../patrocars_v1/patrocars_funcionalidades.js'
import { escrever_montadoras_arquivo } from '../patrocars_v1/patrocars_utils.js'
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
            escrever_modelos_arquivo(modelos)
            print('\nModelo cadastrado com sucesso!\n')
            press_enter_to_continue()

        // 2 - Listar modelos
        } else if (opcao === 2){
            clear_screen()
            print('Escolha uma das opções a seguir:')
            let texto = '----------------------------------\n1 - Listar todos\n2 - Listar modelos por montadora\n3 - Listar modelos ordenados\n----------------------------------\n> '
            let escolha = get_number_in_range(texto, 1, 3)
            listar_modelos(modelos, escolha)
            press_enter_to_continue()

        // 3 - Filtrar modelos por critério e ordenar ASC ou DESC
        } else if (opcao === 3){
            clear_screen()
            print('\nEscolha o critério pelo qual deseja filtrar os modelos:')
            let texto = '----------------------------------\n1 - Parte do nome do modelo\n2 - Automático ou não\n3 - Motor\n4 - Parte do nome da montadora\n----------------------------------\n> '
            let escolha = get_number_in_range(texto, 1, 4)

            if (escolha === 1){
                let parte_nome = get_texto('\n> Por qual parte do nome do modelo você deseja filtrar os modelos?\n')
                let atributo = get_atributos_para_ordenacao()
                let ordem = get_texto('\n> Qual o tipo de ordenação desejado? (ASC/DESC)?\n')
                let modelos_filtrados = filtrar_modelos(modelos, 'nome', parte_nome)
                let modelos_ordenados = ordenar_modelos(modelos_filtrados, atributo, ordem)
                mostrar_modelos(modelos_ordenados, '\n> > > Modelos Cadastrados < < <')

            } else if (escolha === 2){
                let automatico = get_texto('\n> Automático? (Sim/Não)\n')
                let atributo = get_atributos_para_ordenacao()
                let ordem = get_texto('\n> Qual o tipo de ordenação desejado? (ASC/DESC)?\n')
                let modelos_filtrados = filtrar_modelos(modelos, 'automatico', automatico)
                let modelos_ordenados = ordenar_modelos(modelos_filtrados, atributo, ordem)
                mostrar_modelos(modelos_ordenados, '\n> > > Modelos Cadastrados < < <')

            } else if (escolha === 3){
                let motorizacao = get_number('\n> Por qual valor de motorização você deseja filtrar?\n')
                let atributo = get_atributos_para_ordenacao()
                let ordem = get_texto('\n> Qual o tipo de ordenação desejado? (ASC/DESC)?\n')
                let modelos_filtrados = filtrar_modelos(modelos, 'motorizacao', motorizacao)
                let modelos_ordenados = ordenar_modelos(modelos_filtrados, atributo, ordem)
                mostrar_modelos(modelos_ordenados, '\n> > > Modelos Cadastrados < < <')

            } else {
                let montadora = get_texto('\n> Por qual parte do nome da montadora você deseja filtrar os modelos?\n')
                let atributo = get_atributos_para_ordenacao()
                let ordem = get_texto('\n> Qual o tipo de ordenação desejado? (ASC/DESC)?\n')
                let modelos_filtrados = filtrar_modelos(modelos, 'montadora_escolhida', montadora)
                let modelos_ordenados = ordenar_modelos(modelos_filtrados, atributo, ordem)
                mostrar_modelos(modelos_ordenados, '\n> > > Modelos Cadastrados < < <')
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

        // 6 - Atualizar cadastro de montadora
        // Ao tentar remover a Montadora, se esta tiver Modelos cadastrados, informar ao usuário 
        // e perguntar se deseja realmente remover, caso positivo, removerá a Montadora e todos os seus modelos.

        // pedir indice da montadora -> filtrar modelos pelo atributo montadora_escolhida para verificar se o nome da montadora
        // do indice escolhido é o mesmo nome
        } else if (opcao === 6){
            clear_screen()
            print('\nEscolha a montadora a ser removida:\n')
            let indice_montadora = obter_indice_montadora(montadoras)
            let models = modelos.filter(modelo => modelo['montadora_escolhida'] === montadoras[indice_montadora]['nome'])
            let nome_montadora = montadoras[indice_montadora]['nome']
            // mostrar_modelos(models, `\n> > > Modelos Cadastrados na Montadora ${montadoras[indice_montadora]['nome']} < < <`)
            if (get_size(models) >= 1){
                let escolha = get_texto(`\nEssa montadora possui modelos cadastrados. Deseja mesmo removê-la? (S/N)\n`)

                if (escolha === 'S' || escolha === 's'){
                    montadoras.splice(indice_montadora, 1)
                    print(`\nMontadora ${nome_montadora} removida com sucesso!\n`)    
                    escrever_montadoras_arquivo(montadoras)            
                }
            } else {
                montadoras.splice(indice_montadora, 1)
                print(`\nMontadora ${nome_montadora} removida com sucesso!\n`)   
                escrever_montadoras_arquivo(montadoras)            
            }
            press_enter_to_continue()
        }
    }

}

main()