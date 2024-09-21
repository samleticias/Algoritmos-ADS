// Entrada e saída de dados 
import { question } from "readline-sync";
import { texto_para_caixa_alta, texto_para_caixa_baixa } from "./string_utils.js";

// funcao para pressionar enter para continuar o jogo
export function press_enter_to_continue(){
    question("Pressione enter para voltar...")
}

// funcao print
export function exibe_texto(conteudo){
    console.log(conteudo)
}

// funcao para exibir texto em caixa baixa
export function mostra_texto_caixa_baixa(mensagem){
    let texto_caixa_baixa = texto_para_caixa_baixa(mensagem)
    console.log(texto_caixa_baixa)
}

// funcao para exibir texto em caixa alta
export function mostra_texto_caixa_alta(mensagem){
    let texto_caixa_alta = texto_para_caixa_alta(mensagem)
    console.log(texto_caixa_alta)
}

// funcao para exibir cada uma das opcoes do menu
export function exibir_opcoes(opcoes, texto = 'Escolha uma das opções a seguir:') {
    console.log(texto)
    
    for (let i = 0; i < opcoes.length; i++) {
        console.log(`> ${opcoes[i]}`)
    }
    
    let opcao_escolhida = Number(question('Digite o número da opção desejada:\n'));
    
    return opcao_escolhida
}

// funcao para obter numero positivo, retornando valor positivo
// faz loop while que se repete se a condição de o número ser menor que zero for verdadeira
export function get_numero_positivo(texto){
    let numero = get_number(texto)
    while (numero < 0){
        console.log('O número deve ser positivo!')
        numero = get_number(texto)
    }
    return numero
}

// funcao para limpar tela
export function clear_screen(){
    console.clear()
}

// funcao para obter texto, retornando valor do tipo string
export function get_texto(mensagem){
    let texto = question(mensagem)
    return texto
}

// funcao para obter numero, retornando valor do tipo number
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
