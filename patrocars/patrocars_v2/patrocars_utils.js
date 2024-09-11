// PatroCars Utils
import { question } from "readline-sync"
import { meu_push } from "./util/my_vetores_utils.js"
import { print } from './util/my_entsai_utils.js'
import { texto_para_caixa_baixa } from './util/my_string_utils.js'
import fs from 'fs'
import { writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// funcao para inicializar modelos
export function inicializa_modelos(){
    const modelos = []
    const data = fs.readFileSync('modelos.txt', 'utf-8')
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

// funcao para exibir opcoes do menu
export function get_opcoes(opcoes, label = 'Escolha uma das opções a seguir:'){
    print(label)
    for (let i = 0; i < opcoes.length; i++){
        print(`> ${opcoes[i]}`)
    }
    let opcao_escolhida = Number(question('Digite o número da opção desejada:\n'))
    return opcao_escolhida
}

// funcao para exibir menu de modelos
export function menu_modelos(){
    const opcoes = [
        '------------------------------------------',
        '|=============== MODELOS ================|',
        '------------------------------------------',
        '1 - Cadastrar modelo',
        '2 - Listar modelos',
        '3 - Filtrar modelos por critério',
        '4 - Atualizar modelo',
        '5 - Remover modelo',
        '6 - Atualizar cadastro de montadora',
        '0 - Sair',
        '------------------------------------------'
    ]
    return opcoes
}

// funcao para escrever conteúdo em um arquivo
export function escreve_conteudo_em_arquivo(nome_arquivo, conteudo){
    writeFileSync(nome_arquivo, conteudo)
}

// funcao para escrever modelos em um arquivo
export function escrever_modelos_arquivo(modelos) {
    const caminho_arquivo = path.resolve(__dirname, 'modelos.txt')
    const linhas = modelos.map(modelo => 
        `${modelo.id_modelo}#${modelo.nome}#${modelo.montadora_escolhida}#${modelo.valor_referencia}#${modelo.motorizacao}#${modelo.turbo}#${modelo.automatico}`
    )
    fs.writeFileSync(caminho_arquivo, linhas.join('\n') + '\n', 'utf8')
}




