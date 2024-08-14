export function inverte_texto(texto){
    let inverso = ''

    for (let caractere of texto){
        inverso = caractere + inverso
    }
    return inverso
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

export function eh_letra_minuscula(caractere){ // 97 a 122
    return caractere.charCodeAt() >= 97 && caractere.charCodeAt() <= 122
}

export function eh_letra_maiuscula(caractere){ // 65 a 90
    return caractere.charCodeAt() >= 65 && caractere.charCodeAt() <= 90
}

export function eh_letra(caractere) {
    return (caractere >= 'a' && caractere <= 'z') || (caractere >= 'A' && caractere <= 'Z')
}

export function texto_para_caixa_alta(texto){
    let texto_caixa_alta = ''

    for (let caractere of texto){
        if (eh_letra_minuscula(caractere)){
                texto_caixa_alta += String.fromCharCode(caractere.charCodeAt(0) - 32)
            } else {
                texto_caixa_alta += caractere
            }
        }

    return texto_caixa_alta
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

// meu length 
export function len(texto){
    let tamanho = 0
    for (let caractere of texto){
        tamanho = tamanho + 1
    }
    return tamanho
}