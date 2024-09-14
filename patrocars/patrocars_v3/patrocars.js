import { cadastrar_veiculo, listar_veiculos, mostrar_veiculos, vender_veiculo } from "./patrocars_funcionalidades.js"
import { escrever_veiculos_arquivo, get_opcoes, inicializa_veiculos, menu_veiculos } from "./patrocars_utils.js"
import { clear_screen, press_enter_to_continue, print, get_number_in_range } from "./util/my_entsai_utils.js"
import { meu_push } from "./util/my_vetores_utils.js"

function main(){
    let opcao = -1
    let veiculos = inicializa_veiculos()

    while (opcao !== 0){
        clear_screen()
        opcao = get_opcoes(menu_veiculos())

        if (opcao === 0){
            clear_screen()
            escrever_veiculos_arquivo(veiculos)
            print('Saindo...')
            break

        // 1 - Cadastrar veículo
        } else if (opcao === 1){
            clear_screen()
            let veiculo = cadastrar_veiculo()
            if (veiculo != null){
                meu_push(veiculos, veiculo)
                escrever_veiculos_arquivo(veiculos)
            }
            press_enter_to_continue()

        // 2 - Listar veículos
        } else if (opcao === 2){
            clear_screen()
            listar_veiculos(veiculos)
            press_enter_to_continue()

        // 3 - Editar/Remover veículo
        } else if (opcao === 3){
            clear_screen()
            print('Escolha uma das opções a seguir:')
            let texto = '-----------------------\n1 - Atualizar veículo\n2 - Remover veículo\n-----------------------\n> '
            let escolha = get_number_in_range(texto, 1, 2)
            mostrar_veiculos(veiculos, escolha)
            escrever_veiculos_arquivo(veiculos)
            press_enter_to_continue()

        // 4 - Vender veículo
        // Buscar Veículo por Filtro (montadora/modelo) ou placa
        // Marcar Veículo como Vendido
        } else if (opcao === 4){
            clear_screen()
            print('Escolha uma das opções a seguir:')
            let texto = '------------------------------\n1 - Buscar veículo por modelo\n2 - Buscar veículo por placa\n------------------------------\n> '
            let escolha = get_number_in_range(texto, 1, 2)
            vender_veiculo(veiculos, escolha)
            escrever_veiculos_arquivo(veiculos)
            press_enter_to_continue()
        }

    }
}

main()