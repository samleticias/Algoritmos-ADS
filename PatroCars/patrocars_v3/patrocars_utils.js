// PatroCars Utils
import { get_size, meu_push } from './util/my_vetores_utils.js'
import { get_number, print, get_number_in_range } from './util/my_entsai_utils.js'
import { configurar_montadora } from '../patrocars_v1/patrocars_utils.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// funcao para exibir opcoes do menu
export function get_opcoes(opcoes, label = 'Escolha uma das opções a seguir:'){
    print(label)
    for (let i = 0; i < get_size(opcoes); i++){
        print(`> ${opcoes[i]}`)
    }
    let opcao_escolhida = get_number('Digite o número da opção desejada:\n')
    return opcao_escolhida
}

// funcao para obter indice do modelo 
export function obter_indice_modelo(modelos){
    print('\n>>> Modelos Cadastrados <<<')
    for (let i = 0; i < get_size(modelos); i++){
        let modelo = modelos[i]
        let linha = `${i}: ${modelo.nome}`
        print(linha)
    }
    print('------------------------------------')
    let indice = get_number_in_range('> ', 0, get_size(modelos) - 1)
    return indice
}

// funcao para obter indice da montadora
export function obter_indice_montadora(montadoras){
    print('\n>>> Montadoras Cadastradas <<<')
    for (let i = 0; i < get_size(montadoras); i++){
        let montadora = montadoras[i]
        let linha = `${i}: ${montadora.nome}`
        print(linha)
    }
    print('------------------------------------')
    let indice = get_number_in_range('> ', 0, get_size(montadoras) - 1)
    return indice
}

// funcao para obter indice de veiculo
export function obter_indice_veiculo(veiculos){
    print('\n> > > Veículos Cadastrados < < <')
    print('---------------------------------')
    for (let i = 0; i < get_size(veiculos); i++){
        let veiculo = veiculos[i]
        let linha = `${i}: ${veiculo.placa} - ${veiculo.cor}`
        print(linha)
    }
    print('---------------------------------')
    let indice = get_number_in_range('> ', 0, get_size(veiculos) - 1)
    return indice
}

// funcao para inicializar modelos do arquivo da patrocars versão 2
export function inicializa_modelos(){
    const modelos = []
    const data = fs.readFileSync('C:/Users/sammy/OneDrive/Área de Trabalho/ads_atividades/patrocars/patrocars_v2/modelos.txt', 'utf-8')
    const lines = data.split('\n')

    for (let line of lines){

        if (!line) continue

        const atributos = line.split('#')
        const modelo = {'id_modelo': atributos[0],
                            'nome': atributos[1],
                            'montadora_escolhida': atributos[2],
                            'valor_referencia': atributos[3],
                            'motorizacao': atributos[4],
                            'turbo': atributos[5],
                            'automatico': atributos[6]
                        }
        meu_push(modelos, modelo)
    }
    return modelos
}

// funcao para inicializar montadoras do arquivo da patrocars versão 1
export function inicializa_montadoras() {
    const caminho_arquivo = path.resolve(__dirname, 'C:/Users/sammy/OneDrive/Área de Trabalho/ads_atividades/patrocars/patrocars_v1/montadoras.txt')
    const data = fs.readFileSync(caminho_arquivo, 'utf8')

    return data
        .split('\n')
        .filter(linha => linha.trim()) 
        .map(linha => {
            const [id, nome, pais, ano_fundacao] = linha.split('#')
            return configurar_montadora(id, nome, pais, ano_fundacao)
        })
}

// menu de opcoes do CRUD de veiculos
export function menu_veiculos(){
    const opcoes = [
        '--------------------------------',
        '|========== VEÍCULOS ==========|',
        '--------------------------------',
        '1 - Cadastrar veículo',
        '2 - Listar veículos',
        '3 - Editar/Remover veículo',
        '4 - Vender veículo',
        '--------------------------------'
    ]
    return opcoes
}

// funcao para inicializar veiculos de arquivo veiculos.txt
export function inicializa_veiculos(){
    const veiculos = []
    const data = fs.readFileSync('veiculos.txt', 'utf-8')
    const lines = data.split('\n')

    for (let line of lines){

        if (!line) continue

        const atributos = line.split('#')
        const veiculo = {'id_veiculo': atributos[0],
                            'modelo_id': atributos[1],
                            'cor': atributos[2],
                            'ano_fabricacao': atributos[3],
                            'ano_modelo': atributos[4],
                            'valor': atributos[5],
                            'placa': atributos[6],
                            'vendido': atributos[7]
                        }
        meu_push(veiculos, veiculo)
    }
    return veiculos
}

// funcao para escrever veiculos em um arquivo
export function escrever_veiculos_arquivo(veiculos) {
    const caminho_arquivo = path.resolve(__dirname, 'veiculos.txt')
    const linhas = veiculos.map(veiculo => 
        `${veiculo.id_veiculo}#${veiculo.modelo_id}#${veiculo.cor}#${veiculo.ano_fabricacao}#${veiculo.ano_modelo}#${veiculo.valor}#${veiculo.placa}#${veiculo.vendido}`
    )
    fs.writeFileSync(caminho_arquivo, linhas.join('\n') + '\n', 'utf8')
}

