import { question } from 'readline-sync'

export function get_text(mensagem){
  return question(mensagem)
}

export function unir_textos(str1, str2) {
    return str1 + str2
}

export function eh_consoante(caractere){
    if (caractere.charCodeAt() >= 66 && caractere.charCodeAt() <= 68 || caractere.charCodeAt() >= 98 && caractere.charCodeAt() <= 100){
        return true
    } 
    if (caractere.charCodeAt() >= 70 && caractere.charCodeAt() <= 72 || caractere.charCodeAt() >= 102 && caractere.charCodeAt() <= 104){
        return true
    }
    if (caractere.charCodeAt() >= 74 && caractere.charCodeAt() <= 78 || caractere.charCodeAt() >= 106 && caractere.charCodeAt() <= 110){
        return true
    }
    if (caractere.charCodeAt() >= 80 && caractere.charCodeAt() <= 84 || caractere.charCodeAt() >= 112 && caractere.charCodeAt() <= 114){
        return true
    } else if (caractere.charCodeAt() >= 86 && caractere.charCodeAt() <= 90 || caractere.charCodeAt() >= 118 && caractere.charCodeAt() <= 122){
        return true
    } else {
        return false
    }
}

export function duplicar_caractere(texto){
    let texto_novo = ''
    for (let caractere of texto){
        texto_novo += caractere * 2
    }

    return texto_novo
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

// 97, 101, 105, 111, 117
// 65, 69, 73, 79, 85
export function eh_vogal(letra){ 
    if (ord(letra) == 65 || ord(letra) == 69 || ord(letra) == 73 || ord(letra) == 79 || ord(letra) == 85
    || ord(letra) == 97 || ord(letra) == 101 || ord(letra) == 105 || ord(letra) == 111 || ord(letra) == 117)
    {
        return true
    }
    return false
}

export function ord(letra){
    return letra.charCodeAt()
}

export function texto_para_caixa_baixa(texto){
    let texto_caixa_baixa = ''

    for (let caractere of texto){
        if (eh_letra_maiuscula(caractere)){
            texto_caixa_baixa += String.fromCharCode(caractere.charCodeAt(0) - 32)
        } else {
            texto_caixa_baixa += caractere
        }
    }
    return texto_caixa_baixa
}



