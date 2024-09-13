// PatroCars Funcionalidades
import { ulid } from 'ulidx'
import { get_size } from './util/my_vetores_utils.js'
import { get_number_in_range, get_positive_number, get_texto, print } from './util/my_entsai_utils.js'
import { obter_indice_montadora, obter_indice_modelo, obter_indice_veiculo } from '../patrocars_v3/patrocars_utils.js'
import { inicializa_modelos, inicializa_montadoras } from './patrocars_utils.js'

// funcao para cadastrar veiculo pedindo a montadora, exibindo modelos da montadora e solicitando o modelo do veiculo
export function cadastrar_veiculo(){
    print('\n*** Id é gerado automaticamente ***\n')
    // filtrar montadora -> filtrar modelos da montadora 
    // escolher montadora
    print('Escolha a montadora em que deseja cadastrar o veículo:')
    let id_veiculo = ulid()
    let montadoras = inicializa_montadoras()
    let index_montadora = obter_indice_montadora(montadoras)

    // filtra modelos pela montadora
    let modelos = inicializa_modelos()
    let modelos_filtrados = modelos.filter(modelo => modelo['montadora_escolhida'] === montadoras[index_montadora]['nome'])
    
    if (get_size(modelos_filtrados) < 1){
        print('\nNenhum modelo encontrado para essa montadora!\n')
        return
    } else {
        print('\nEscolha o modelo em que deseja cadastrar o veículo:')
    
        let index_modelo = obter_indice_modelo(modelos_filtrados)
        let modelo_id = modelos[index_modelo]['id_modelo']
    
        let cor = get_texto(`\nQual a cor do veículo?\n`)
        let ano_fabricacao = get_positive_number(`\nQual o ano de fabricação do veículo?\n`)
        let ano_modelo = get_positive_number(`\nQual o ano do modelo do veículo?\n`)
        let valor = parseFloat(get_positive_number(`\nQual o valor do veículo? (R$)\n`))
        let placa = get_texto(`\nQual a placa do veículo?\n`)
        let vendido = 'Não'
    
        let veiculo = {
            'id_veiculo': id_veiculo,
            'modelo_id': modelo_id,
            'cor': cor,
            'ano_fabricacao': ano_fabricacao,
            'ano_modelo': ano_modelo,
            'valor': valor,
            'placa': placa,
            'vendido': vendido
        }
        print('\nVeículo cadastrado com sucesso!\n')
    
        return veiculo
    }
}

// Fazer Editar e Remover
// Listar e Escolher
// E então remover/editar conforme procedimento já dominados
export function listar_veiculos(veiculos, label = '\n> > > Veículos Cadastrados < < <'){
    print(label)
    for (let veiculo of veiculos){
        const v = 
        `\n
        > Veículo: \n
        | ID Veículo: ${veiculo['id_veiculo']}\n
        | ID Modelo: ${veiculo['modelo_id']}\n
        | Cor do Veículo: ${veiculo['cor']}\n
        | Ano de Fabricação: ${veiculo['ano_fabricacao']}\n
        | Ano do Modelo: ${veiculo['ano_modelo']}\n
        | Valor do Véiculo R$: ${veiculo['valor']}\n
        | Placa: ${veiculo['placa']}\n
        | Status Vendido: ${veiculo['vendido']}`
        print(v)
    }
}

// funcao para editar ou remover veiculo de acordo com a escolha do usuario no menu
export function mostrar_veiculos(veiculos, escolha){
    // Atualizar veiculo
    if (escolha === 1){
        atualizar_veiculo(veiculos)

    // Remover veiculo
    } else {
        remover_veiculo(veiculos)
    }
}

// funcao para remover veiculo 
export function remover_veiculo(veiculos){
    print('\nEscolha o índice do veículo para remover:')
    let indice = obter_indice_veiculo(veiculos)
    let placa = veiculos[indice].placa
    veiculos.splice(indice, 1)
    print(`\nVeículo de placa ${placa} removido com sucesso!\n`)
}

// funcao para atualizar atributos do veiculo
export function atualizar_veiculo(veiculos){
    print('\nEscolha o índice do veículo a ser atualizado:')
    let indice = obter_indice_veiculo(veiculos)

    let veiculo_atual = veiculos[indice]

    let atualizacoes = {
        'cor': 1,
        'ano_fabricacao': 2,
        'ano_modelo': 3,
        'valor': 4,
        'placa': 5
    }
    print('\nEscolha o atributo que deseja atualizar:\n')
    let texto = '\t1 - Cor\n\t2 - Ano de fabricação\n\t3 - Ano do modelo\n\t4 - Valor R$\n\t5 - Placa\n> '
    let alteracao_desejada = get_number_in_range(texto, 1, 5)

    if (alteracao_desejada === atualizacoes['cor']){
        let nova_cor = get_texto('\nQual a nova cor do veículo?\n')
        veiculo_atual['cor'] = nova_cor

    } else if (alteracao_desejada === atualizacoes['ano_fabricacao']){
        let novo_ano_fabricacao = get_positive_number('\nQual o novo ano de fabricação do veículo?\n')
        veiculo_atual['ano_fabricacao'] = novo_ano_fabricacao

    } else if (alteracao_desejada === atualizacoes['ano_modelo']){
        let novo_ano_modelo = get_positive_number('\nQual o novo ano do modelo?\n')
        veiculo_atual['ano_modelo'] = novo_ano_modelo

    } else if (alteracao_desejada === atualizacoes['valor']){
        let novo_valor = parseFloat(get_positive_number('\nQual o novo valor do veículo? (R$)\n'))
        veiculo_atual['valor'] = novo_valor

    } else if (alteracao_desejada === atualizacoes['placa']){
        let nova_placa = get_texto('\nQual a nova placa do veículo?\n')
        veiculo_atual['placa'] = nova_placa
    } 
    print(`\nVeículo atualizado com sucesso!\n`)
}

// funcao para vender veiculo 
export function vender_veiculo(veiculos, escolha){
    // busca veiculo por modelo
    // filtrar pela montadora -> filtrar pelo modelo -> filtrar pelo veiculo
    if (escolha === 1){
        let montadoras = inicializa_montadoras()
        print('\nEscolha a montadora do veículo que deseja vender:')
        let indice_montadora = obter_indice_montadora(montadoras)

        // filtrar modelos pela montadora desejada
        let modelos = inicializa_modelos()
        const modelos_filtrados = modelos.filter(modelo => modelo['montadora_escolhida'] === montadoras[indice_montadora]['nome'])
        if (get_size(modelos_filtrados) < 1){
            print('\nNenhum modelo encontrado para a montadora escolhido!\n')
            return
        }
        print('\nEscolha o modelo do veículo que deseja vender:')
        let indice_modelo = obter_indice_modelo(modelos_filtrados)

        // filtra veiculos por modelo desejado 
        let veiculos_filtrados = veiculos.filter(veiculo => veiculo['modelo_id'] === modelos_filtrados[indice_modelo]['id_veiculo'])

        if (get_size(veiculos_filtrados) === 0) {
            print('\nNenhum veículo encontrado para o modelo escolhido!\n')
            return
        }
        
        print('\nEscolha o veículo que deseja vender:')
        let indice_veiculo = obter_indice_veiculo(veiculos_filtrados)
        let veiculo_para_vender = veiculos_filtrados[indice_veiculo]

        // verifica se veiculo ja foi vendido
        if (veiculo_para_vender['vendido'] === 'Sim') {
            print('\nVeículo já foi vendido!\n')
        } else {
            veiculo_para_vender['vendido'] = 'Sim'
            print('\nVeículo vendido com sucesso!\n')
        }

    // busca veículo por placa
    } else {
        let placa_desejada = get_texto('\nQual a placa do veículo que deseja vender?\n')
        let veiculos_filtrados = filtrar_veiculos(veiculos, 'placa', placa_desejada)
        
        if (get_size(veiculos_filtrados) === 0) {
            print('\nVeículo não encontrado!\n')
            return
        }

        let veiculo_para_vender = veiculos_filtrados[0]
        
        if (veiculo_para_vender['vendido'] === 'Sim') {
            print('\nVeículo já foi vendido!\n')
        } else {
            veiculo_para_vender['vendido'] = 'Sim'
            print('\nVeículo vendido com sucesso!\n')
        }
    }
}


// funcao para filtrar veiculos com criterio
export function filtrar_veiculos(veiculos, criterio, valor) {
    return veiculos.filter(veiculo => {
        if (criterio === 'modelo_id') {
            return veiculo['modelo_id'].includes(valor)
        } else if (criterio === 'placa') {
            return veiculo['placa'].includes(valor)
        }
        return false
    })
}






