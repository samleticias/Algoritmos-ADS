import { question } from 'readline-sync'

export function get_text(mensagem){
  return question(mensagem)
}

export function unir_textos(str1, str2) {
    return str1 + str2
}

export function inverte_texto(texto){
    let inverso = ''

    for (let caractere of texto){
        inverso = caractere + inverso
    }
    
    return inverso
}

export function eh_letra_minuscula(caractere){ // 97 a 122
    return caractere.charCodeAt() >= 97 && caractere.charCodeAt() <= 122
}

export function eh_letra_maiuscula(caractere){ // 65 a 90
    return caractere.charCodeAt() >= 65 && caractere.charCodeAt() <= 90
}

export function eh_letra(caractere) {
    return (caractere >= 'a' && caractere <= 'z') || (caractere >= 'A' && caractere <= 'Z')
}


