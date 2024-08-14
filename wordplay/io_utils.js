// Entrada e saída de dados 
import { question } from "readline-sync";
import { texto_para_caixa_alta, texto_para_caixa_baixa } from "./string_utils.js";

export function exibe_texto(conteudo){
    console.log(conteudo)
}

export function mostra_texto_caixa_baixa(mensagem){
    let texto_caixa_baixa = texto_para_caixa_baixa(mensagem)
    console.log(texto_caixa_baixa)
}

export function mostra_texto_caixa_alta(mensagem){
    let texto_caixa_alta = texto_para_caixa_alta(mensagem)
    console.log(texto_caixa_alta)
}

export function exibir_opcoes(opcoes, texto = 'Escolha uma das opções a seguir:') {
    console.log(texto)
    
    for (let i = 0; i < opcoes.length; i++) {
        console.log(`> ${opcoes[i]}`)
    }
    
    let opcao_escolhida = Number(question('Digite o número da opção desejada:\n'));
    
    return opcao_escolhida
}

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

export function get_texto(mensagem){
    let texto = question(mensagem)
    return texto
}

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
