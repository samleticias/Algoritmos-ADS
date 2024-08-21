// Entrada e saída de dados 
import { question } from "readline-sync";

export function press_enter_to_continue(){
    question("Pressione enter para voltar...")
}

export function exibe_texto(conteudo){
    console.log(conteudo)
}

export function get_numero_min(texto, minimo){
    let numero = get_number(texto)
    while (numero < minimo){
        console.log(`O número informado é menor que o mínimo permitido ${minimo}!`)
        numero = get_number(texto)
    }
    return numero
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

export function get_numero_negativo(texto){
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

export function get_random_number(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }