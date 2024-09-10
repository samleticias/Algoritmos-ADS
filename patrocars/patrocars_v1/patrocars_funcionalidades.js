// // PatroCars Funcionalidades
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { get_number_in_range, get_texto, print } from './util/my_entsai_utils.js'
import { texto_para_caixa_baixa } from './util/my_string_utils.js'
import { get_size } from './util/my_vetores_utils.js'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// funcao para configurar a montadora
export function configurar_montadora(id, nome, pais, ano_fundacao) {
    return {
        id,
        nome,
        pais,
        ano_fundacao
    }
}

// funcao para mostrar as informações das montadoras
export function mostrar_montadoras(montadoras){
    for (let montadora of montadoras){
        print(`\n
            > Montadora: ${montadora.nome}\n
            | ID da montadora: ${montadora.id}\n
            | País da montadora: ${montadora.pais}\n
            | Ano de fundação da montadora: ${montadora.ano_fundacao}`)
    }
}

// funcao para inicializar as montadoras
export function inicializa_montadoras() {
    const caminho_arquivo = path.resolve(__dirname, 'montadoras.txt')
    const data = fs.readFileSync(caminho_arquivo, 'utf8')

    return data
        .split('\n')
        .filter(linha => linha.trim()) 
        .map(linha => {
            const [id, nome, pais, ano_fundacao] = linha.split('#')
            return configurar_montadora(id, nome, pais, ano_fundacao)
        })
}

// funcao para escrever montadoras em um arquivo
export function escrever_montadoras_arquivo(montadoras) {
    const caminho_arquivo = path.resolve(__dirname, 'montadoras.txt')
    const linhas = montadoras.map(montadora => 
        `${montadora.id}#${montadora.nome}#${montadora.pais}#${montadora.ano_fundacao}`
    )
    fs.writeFileSync(caminho_arquivo, linhas.join('\n') + '\n', 'utf8')
}

// funcao para obter indice da montadora na lista de montadoras
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

// funcao para atualizar montadora por indice na lista de montadoras
export function atualizar_montadora(indice, montadoras){
    let montadora_atual = montadoras[indice]

    let atualizacoes = {
        'nome': 1,
        'pais': 2,
        'ano_fundacao': 3
    } 
    
    let texto = '\t1 - Nome\n\t2 - País\n\t3 - Ano de fundação\n> '
    let alteracao_desejada = get_number_in_range(texto, 1, 3)

    if (alteracao_desejada == atualizacoes['nome']){
        let novo_nome = get_texto(`Qual será o novo nome da montadora ${montadora_atual.nome}?\n`)
        montadoras[indice] = configurar_montadora(montadora_atual.id, novo_nome, montadora_atual.pais, montadora_atual.ano_fundacao)
    } else if (alteracao_desejada == atualizacoes['pais']){
        let novo_pais = get_texto(`Qual será o novo país de origem da montadora ${montadora_atual.nome}?\n`)
        montadoras[indice] = configurar_montadora(montadora_atual.id, montadora_atual.nome, novo_pais, montadora_atual.ano_fundacao)
    } else {
        let novo_ano = get_texto(`Qual será o novo ano de fundação da montadora ${montadora_atual.nome}?\n`)
        montadoras[indice] = configurar_montadora(montadora_atual.id, montadora_atual.nome, montadora_atual.pais, novo_ano)
    }
}

// funcao para remover montadora da lista de montadoras
export function remover_montadora(montadoras){
    print('\n> Escolha o índice da montadora que deseja remover:\n')
    let indice_desejado = obter_indice_montadora(montadoras)
    let nome = montadoras[indice_desejado].nome
    montadoras.splice(indice_desejado, 1)
    print(`\nMontadora ${nome} removida com sucesso!\n`)
}

// funcao para mostrar quantidade de montadoras por pais
export function mostrar_quantidade_montadoras_por_pais(montadoras){
    let quantidade_por_pais = {}
    for (let i = 0; i < get_size(montadoras); i++) {
        const pais_atual = montadoras[i].pais
        quantidade_por_pais[pais_atual] = (quantidade_por_pais[pais_atual] || 0) + 1
    }
    print('Montadoras por país:')
    print('-----------------------------')
    for (let pais in quantidade_por_pais) {
        print(`${pais.charAt(0).toUpperCase() + pais.slice(1)} > ${quantidade_por_pais[pais]}`)
    }
    print('-----------------------------')
}

// Ao listar todas ou filtrar, sempre perguntar se desejar ordenar por qual atributo e ainda se ASC ou DESC (nome, pais, ano_funcacao)
export function ordenar_montadoras(montadoras, atributo, ordem = 'ASC') {
    return montadoras.sort((a, b) => {
        let valorA = texto_para_caixa_baixa(a[atributo])
        let valorB = texto_para_caixa_baixa(b[atributo])

        if (valorA < valorB) return ordem === 'ASC' ? -1 : 1
        if (valorA > valorB) return ordem === 'ASC' ? 1 : -1
        return 0
    })
}

export function filtrar_montadoras(montadoras, criterio, valor) {
    return montadoras.filter(montadora => {
        if (criterio === 'nome') {
            return texto_para_caixa_baixa(montadora.nome).includes(texto_para_caixa_baixa(valor))
        } else if (criterio === 'pais') {
            return texto_para_caixa_baixa(montadora.pais).includes(texto_para_caixa_baixa(valor))
        }
        return false
    })
}


