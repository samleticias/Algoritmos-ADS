// PatroCars Funcionalidades
import { inicializa_montadoras } from '../patrocars_v1/patrocars_funcionalidades.js'
import { ulid } from 'ulidx'
import { get_number, get_texto, print, get_number_in_range } from './util/my_entsai_utils.js';
import { get_size } from './util/my_vetores_utils.js';
import { texto_para_caixa_baixa, texto_para_caixa_alta } from './util/my_string_utils.js'

// funcao para cadastrar modelo
export function cadastrar_modelo(){
    print('Escolha a montadora em que deseja cadastrar o modelo:\n')
    const id_modelo = ulid()
    const montadoras = inicializa_montadoras()
    const index = obter_indice_montadora(montadoras)
    const nome = get_texto('\n> Qual o nome do modelo?\n')
    const montadora_escolhida = montadoras[index]['nome']
    const valor_referencia = get_number(`\n> Qual o valor de referência do ${nome}?\n`)
    const motorizacao = parseFloat(get_number(`\n> Qual a motorização do ${nome}?\n`))
    const turbo = get_texto('\n> Turbo (Sim/Não)?\n')
    const automatico = get_texto('\n> Automático (Sim/Não)?\n')
    
    let modelo = {
        'id_modelo': id_modelo,
        'nome': nome,
        'montadora_escolhida': montadora_escolhida,
        'valor_referencia': valor_referencia,
        'motorizacao': motorizacao,
        'turbo': turbo,
        'automatico': automatico
    }
    
    return modelo
}

// funcao para atualizar modelo por indice
export function atualizar_modelo(indice, modelos){
    let modelo_atual = modelos[indice]

    let atualizacoes = {
        'nome': 1,
        'montadora_escolhida': 2,
        'valor_referencia': 3,
        'motorizacao': 4,
        'turbo': 5,
        'automatico': 6
    } 
    
    let texto = '\t1 - Nome\n\t2 - Montadora\n\t3 - Valor referência\n\t4 - Motorização\n\t5 - Turbo\n\t6 - Automático\n> '
    let alteracao_desejada = get_number_in_range(texto, 1, 6)

    if (alteracao_desejada === atualizacoes['nome']){
        let novo_nome = get_texto(`Qual será o novo nome do modelo ${modelo_atual.nome}?\n`)
        modelo_atual['nome'] = novo_nome
    } else if (alteracao_desejada === atualizacoes['montadora_escolhida']){
        let nova_montadora = get_texto(`Qual será a nova montadora do modelo ${modelo_atual.nome}?\n`)
        modelo_atual['montadora_escolhida'] = nova_montadora
    } else if (alteracao_desejada === atualizacoes['valor_referencia']){
        let novo_velor = get_number(`Qual será o novo valor de referência do modelo ${modelo_atual.nome}?\n`)
        modelo_atual['valor_referencia'] = novo_velor
    } else if (alteracao_desejada === atualizacoes['motorizacao']){
        let nova_motorizacao = get_number(`Qual será a nova motorizacao do modelo ${modelo_atual.nome}?\n`)
        modelo_atual['motorizacao'] = nova_motorizacao
    } else if (alteracao_desejada === atualizacoes['turbo']){
        let novo_turbo = get_texto(`Turbo do modelo ${modelo_atual.nome}? (Sim/Não)\n`)
        modelo_atual['turbo'] = novo_turbo
    } else {
        let novo_automatico = get_texto(`Automático do modelo ${modelo_atual.nome}? (Sim/Não)\n`)
        modelo_atual['automatico'] = novo_automatico
    }
    print('\nModelo atualizado com sucesso!\n')
    
}

// funcao para remover modelo pelo indice 
export function remover_modelo(modelos){
    print('\n> Escolha o índice do modelo que deseja remover:\n')
    let indice_desejado = obter_indice_modelo(modelos)
    let nome = modelos[indice_desejado].nome
    modelos.splice(indice_desejado, 1)
    print(`\nModelo ${nome} removido com sucesso!\n`)
}

// funcao para obter indice da montadora 
export function obter_indice_montadora(montadoras){
    print('>>> Montadoras Cadastradas <<<')
    for (let i = 0; i < get_size(montadoras); i++){
        let montadora = montadoras[i]
        let linha = `${i}: ${montadora.nome}`
        print(linha)
    }
    print('------------------------------------')
    let indice = get_number_in_range('> ', 0, get_size(montadoras) - 1)
    return indice
}

// funcao para obter indice do modelo 
export function obter_indice_modelo(modelos){
    print('>>> Modelos Cadastrados <<<')
    for (let i = 0; i < get_size(modelos); i++){
        let modelo = modelos[i]
        let linha = `${i}: ${modelo.nome}`
        print(linha)
    }
    print('------------------------------------')
    let indice = get_number_in_range('> ', 0, get_size(modelos) - 1)
    return indice
}

// funcao para listar modelos cadastrados
export function listar_modelos(modelos, escolha){
    if (escolha === 1){
        if (get_size(modelos) < 1){
            print('\nNenhum modelo encontrado!\n')
        } else {
            mostrar_modelos(modelos, '\n> > > Modelos Cadastrados < < <')
        }
    } else if (escolha === 2) {
        const montadoras = inicializa_montadoras()
        const indice = obter_indice_montadora(montadoras)
        const modelos_filtrados = modelos.filter(modelo => modelo['montadora_escolhida'] === montadoras[indice]['nome'])
        if (get_size(modelos_filtrados) < 1){
            print('\nNenhum modelo encontrado!\n')
        } else {
            mostrar_modelos(modelos_filtrados, '\n> > > Modelos Cadastrados < < <')
        }
    } else {
            let atributo_ordenacao = texto_para_caixa_baixa(get_texto('\n> Por qual atributo você deseja ordenar os modelos?\n'))
            let tipo_ordenacao = texto_para_caixa_alta(get_texto('\n> Qual o tipo de ordenação desejado? (ASC/DESC)\n'))
            let modelos_ordenados = ordenar_modelos(modelos, atributo_ordenacao, tipo_ordenacao)
            mostrar_modelos(modelos_ordenados, '\n> > > Modelos Ordenados < < <')
    }
}

// funcao para filtrar modelos com criterio
export function filtrar_modelos(modelos, criterio, valor) {
    return modelos.filter(modelo => {
        if (criterio === 'nome') {
            return texto_para_caixa_baixa(modelo.nome).includes(texto_para_caixa_baixa(valor))
        } else if (criterio === 'automatico') {
            return texto_para_caixa_baixa(modelo.automatico).includes(texto_para_caixa_baixa(valor))
        } else if (criterio === 'motorizacao') {
            return modelo.motorizacao === parseFloat(valor)
        } else if (criterio === 'montadora_escolhida') {
            return texto_para_caixa_baixa(modelo.montadora_escolhida).includes(texto_para_caixa_baixa(valor))
        }
        return false
    })
}

// funcao para ordenar modelos
export function ordenar_modelos(modelos, atributo, ordem = 'ASC') {
    return modelos.sort((a, b) => {
        let valorA = texto_para_caixa_baixa(a[atributo])
        let valorB = texto_para_caixa_baixa(b[atributo])

        if (valorA < valorB) return ordem === 'ASC' ? -1 : 1
        if (valorA > valorB) return ordem === 'ASC' ? 1 : -1
        return 0
    })
}

// funcao para mostrar modelos quando dizer operacoes de filtrar/listar
export function mostrar_modelos(modelos, label){
    print(label)
    for(let modelo of modelos){
        const m = 
        `\n
        > Modelo: ${modelo['nome']}\n
        | ID Modelo: ${modelo['id_modelo']}\n
        | Montadora: ${modelo['montadora_escolhida']}\n
        | Valor Referência R$: ${modelo['valor_referencia']}\n
        | Motorização: ${modelo['motorizacao']}\n
        | Turbo: ${modelo['turbo']}\n
        | Automático: ${modelo['automatico']}`
        print(m)
    }
}




