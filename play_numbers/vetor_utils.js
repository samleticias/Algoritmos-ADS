import { writeFileSync } from "fs";
import { carregar_arquivo, get_texto } from "./io_utils.js";

// meu size para obter tamanho do vetor
export function get_size(vetor){
    let tamanho = 0

    for (let elemento of vetor){
        tamanho = tamanho + 1
    }
    return tamanho
}

// funcao para verificar se numero é positivo
export function eh_numero_positivo(numero){
    return numero >= 0
}

// meu push para adicionar valores à lista
export function meu_push(lista, elemento) {
    lista.push(elemento)
    return lista
}

// menu de opcoes
export function menu() {
    let opcoes = [
        '----------------------------------------------------',  
        '=================== PLAY NUMBER ====================',
        '----------------------------------------------------',    
        '1 - Gerar vetor de tamanho N',
        '2 - Preencher vetor manualmente em intervalo',  
        '3 - Preencher vetor manualmente',  
        '4 - Preencher vetor automaticamente', 
        '5 - Mostrar vetor', 
        '6 - Resetar vetor',
        '7 - Ver quantidade de itens no vetor',
        '8 - Ver menor e maior valores e suas posições',  
        '9 - Somatório dos valores', 
        '10 - Média dos valores',  
        '11 - Mostrar valores positivos e quantidade', 
        '12 - Mostrar valores negativos e quantidade',  
        '13 - Atualizar todos os valores por regras', 
        '14 - Adicionar novos valores', 
        '15 - Remover itens por valor exato',
        '16 - Remover por posição', 
        '17 - Editar valor específico por posição', 
        '18 - Salvar valores em arquivo', 
        '19 - Ler dados de um arquivo', 
        '0 - Sair',
        '----------------------------------------------------']
    return opcoes
} 

// menu de opcoes para atualizar numeros do vetor
export function menu_update(){
    let opcoes = [
        '--------------------------------------------------------------------------------',
        '******************************** Atualizações **********************************',
        '--------------------------------------------------------------------------------',    
        '1 - Multiplicar por um valor',
        '2 - Elevar a um valor (exponenciação)',  
        '3 - Reduzir a uma fração',  
        '4 - Substituir valores negativos por um número aleatórios da uma faixa(min, max)', 
        '5 - Ordenar valores', 
        '6 - Embaralhar valores',
        '--------------------------------------------------------------------------------']
    return opcoes
}

// funcao que converte cada elemento da colecao de string para number
export function converte_colecao_string_to_numbers(colecao){
    const novo_vetor  = []
    
    for (let elemento of colecao) {
        // novo_vetor.push(parseInt(elemento))
        meu_push(novo_vetor, parseInt(elemento))
    }
    return novo_vetor
}

// funcao para mostrar elementos do vetor
export function exibe_elementos_vetor(vetor, texto){
    if (get_size(vetor) < 1){
        console.log('\nVetor vazio!\n')
        return
    }
    console.log(texto)
    let elementos_str = "["
    for (let index in vetor){
        if (index == get_size(vetor) -1){
            elementos_str += ` ${vetor[index]}`
            break
        }
        elementos_str += ` ${vetor[index]},`
    }
    elementos_str += " ]"
    console.log(elementos_str)
}

// função para criar um vetor numérico a partir de um arquivo
export function cria_vetor_numerico_arquivo(){
    try{
        const nome_arquivo = get_texto('Qual o nome do arquivo?\n')
        const arquivo = carregar_arquivo(nome_arquivo)
        let vetor = get_vetor_splitado(arquivo, '\n')
        return converte_colecao_string_to_numbers(vetor)
    } 
    catch(error){
        console.log('\nArquivo não encontrado!\n')
        return
    }
}

// funcao para retornar um vetor informando o arquivo e o separador
export function get_vetor_splitado(arquivo, splitador){
    arquivo += "\n"
    const novo_vetor = []
    let elemento_atual = ""

    for (let caracter of arquivo){
        if (caracter == splitador){
            // novo_vetor.push(elemento_atual)
            meu_push(novo_vetor, elemento_atual)
            elemento_atual = ""
            continue
        }
        elemento_atual += caracter
    }
    return novo_vetor
}

// função para converter um vertor em string separando seus elementos por '\n'
export function converte_vetor_para_string(vetor, separador){
    let nova_string = ""
    for (let elemento of vetor){
        nova_string += elemento + separador
    }
    return nova_string
}

// função para escrever conteúdo em um arquivo
export function escreve_conteudo_em_arquivo(nome_arquivo, conteudo){
    writeFileSync(nome_arquivo, conteudo)
}

// função que escreve os dados de um vetor em um arquivo
export function escreve_vetor_em_arquivo(vetor){
    if (get_size(vetor) < 1){
        console.log('\nVetor vazio!\n')
        return
    }
    const conteudo_arquivo = converte_vetor_para_string(vetor, "\n")
    escreve_conteudo_em_arquivo("vetor.txt", conteudo_arquivo)
}

