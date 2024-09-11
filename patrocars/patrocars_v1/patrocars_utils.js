// PatroCars Utils
import { question } from 'readline-sync'
import { print, get_texto } from './util/my_entsai_utils.js'
import { writeFileSync, readFileSync } from 'fs'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// funcao para exibir menu de montadoras
export function menu_montadoras(){
    const opcoes = [
        '--------------------------------------------',
        '|=============== MONTADORAS ================|',
        '--------------------------------------------',
        '1 - Cadastrar montadora',
        '2 - Listar montadoras',
        '3 - Atualizar montadora',
        '4 - Remover montadora',
        '5 - Mostrar status de cadastro',
        '6 - Filtrar montadoras por parte do nome',
        '7 - Filtrar montadoras por parte do nome do país',
        '8 - Carregar dados de um arquivo',
        '0 - Sair',
        '--------------------------------------------'
    ]
    return opcoes
}

// funcao para exibir opcoes do menu
export function get_opcoes(opcoes, label = 'Escolha uma das opções a seguir:'){
    print(label)
    for (let i = 0; i < opcoes.length; i++){
        print(`> ${opcoes[i]}`)
    }
    let opcao_escolhida = Number(question('Digite o número da opção desejada:\n'))
    return opcao_escolhida
}

// funcao para escrever montadoras em um arquivo
export function escrever_montadoras_arquivo(montadoras) {
    const caminho_arquivo = path.resolve(__dirname, 'montadoras.txt')
    const linhas = montadoras.map(montadora => 
        `${montadora.id}#${montadora.nome}#${montadora.pais}#${montadora.ano_fundacao}`
    )
    fs.writeFileSync(caminho_arquivo, linhas.join('\n') + '\n', 'utf8')
}

// cria um dicionario com os atributos informados
export function configurar_montadora(id, nome, pais, ano_fundacao) {
    return {
        id: id,
        nome: nome,
        pais: pais,
        ano_fundacao: ano_fundacao
    }
}

// funcao para escrever conteúdo em um arquivo
export function escreve_conteudo_em_arquivo(nome_arquivo, conteudo){
    writeFileSync(nome_arquivo, conteudo)
}

// funcao para carregar arquivo desejado passando o nome do arquivo
export function carregar_arquivo(nome_arquivo){
    return readFileSync(nome_arquivo, "utf-8")
}

// funcao para converter uma linha do arquivo em um objeto montadora
function linha_para_montadora(linha) {
    const partes = linha.split('#')
    if (partes.length !== 4) {
        throw new Error(`Formato inválido na linha: ${linha}`)
    }
    const [id, nome, pais, ano_fundacao] = partes
    return configurar_montadora(id, nome, pais, ano_fundacao)
}

// funcao para ler um vetor de montadoras a partir de um arquivo
export function ler_vetor_arquivo() {
    try {
        const nome_arquivo = get_texto('Qual o nome do arquivo?\n')
        const arquivo = carregar_arquivo(nome_arquivo)
        
        const linhas = arquivo.trim().split('\n')
        
        const montadoras = linhas.map(linha => linha_para_montadora(linha))
        
        return montadoras
    } catch (error) {
        console.error(`Erro ao ler o arquivo: ${error.message}`)
        return []
    }
}