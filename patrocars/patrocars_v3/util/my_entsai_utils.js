// Entrada e saída de dados 
import { question } from "readline-sync";
import { readFileSync } from "fs"

// funcao para pressionar enter para continuar no jogo
export function press_enter_to_continue(){
    question("\nPressione enter para voltar...")
}

// funcao print
export function print(conteudo){
    console.log(conteudo)
}

// funcao para obter numero minimo
export function get_numero_min(texto, minimo){
    let numero = get_number(texto)
    while (numero < minimo){
        console.log(`O número informado é menor que o mínimo permitido!`)
        numero = get_number(texto)
    }
    return numero
}

// funcao para mostrar opcoes do menu
export function exibir_opcoes(opcoes, texto = 'Escolha uma das opções a seguir:') {
    console.log(texto)
    
    for (let i = 0; i < opcoes.length; i++) {
        console.log(`> ${opcoes[i]}`)
    }
    
    let opcao_escolhida = Number(question('Digite o número da opção desejada:\n'));
    
    return opcao_escolhida
}

// funcao para obter numero positivo
export function get_positive_number(texto){
    let numero = get_number(texto)
    while (numero < 0){
        console.log('O número deve ser positivo!')
        numero = get_number(texto)
    }
    return numero
}

// funcao para obter numero negativo
export function get_negative_number(texto){
    let numero = get_number(texto)
    while (numero > 0){
        console.log('O número deve ser negativo!')
        numero = get_number(texto)
    }
    return numero
}

// funcao para limpar tela
export function clear_screen(){
    console.clear()
}

// funcao para obter texto
export function get_texto(mensagem){
    let texto = question(mensagem)
    return texto
}

// funcao para obter numero
export function get_number(texto){
    while (true){
        let numero = Number(question(texto))

        if (!isNaN(numero)){
            return numero
        } else {
            console.log('Valor inválido!')
        }
    }
}

// funcao para obter valor aleatorio
export function get_random_number(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// funcao para obter valor num intervalo entre valor mínimo e valor máximo
export function get_number_in_range(texto, valor_min, valor_max){
    let numero = get_number(texto)
    while (!(numero >= valor_min && numero <= valor_max)){
        console.log(`O número está fora da faixa!`)
        numero = get_number(texto)
    }
    return numero
}

// funcao para carregar arquivo desejado passando o nome do arquivo
export function carregar_arquivo(nome_arquivo){
    return readFileSync(nome_arquivo, "utf-8")
}