// Na primeira passada, somente caracteres que sejam letras minúsculas e maiúsculas devem 
// ser deslocadas 3 posições para a direita, segundo a tabela ASCII: letra 'a' deve virar letra 'd',
//  letra 'y' deve virar caractere '|' e assim sucessivamente. 
// Na segunda passada, a linha deverá ser invertida. 
// Na terceira e última passada, todo e qualquer caractere a partir da metade em diante (truncada)
//  devem ser deslocados uma posição para a esquerda na tabela ASCII. Neste caso, 'b' vira 'a' e 'a' vira '`'.

// Por exemplo, se a entrada for “Texto #3”, o primeiro processamento sobre esta entrada deverá 
// produzir “Wh{wr #3”. O resultado do segundo processamento inverte os caracteres e produz “3# rw{hW”.
// Por último, com o deslocamento dos caracteres da metade em diante, o resultado final deve ser “3# rvzgV”.

import { question } from "readline-sync"

function main() {
    const N_linhas = get_number()

    for (let i = 0; i < N_linhas; i++) {
        let caso = get_text()

        caso = deslocar_caracteres_tres_posicoes(caso)

        caso = inverte_texto(caso)

        caso = deslocar_metade_para_tras(caso)  

        console.log(caso)
    }
}

function obter_segunda_metade_string(texto) {
    return texto.slice(Math.ceil(texto.length / 2))
}

function unir_textos(str1, str2) {
    return str1 + str2
}

function obter_primeira_metade_string(texto) {
    return texto.slice(0, Math.ceil(texto.length / 2))
}

function deslocar_metade_para_tras(texto) {
    let primeira_metade = obter_primeira_metade_string(texto)
    let segunda_metade = obter_segunda_metade_string(texto)

    let nova_segunda_metade = ''
    for (let letra of segunda_metade) {
        nova_segunda_metade += String.fromCharCode(letra.charCodeAt() - 1)
    }

    let novo_texto = unir_textos(primeira_metade, segunda_metade)

    return novo_texto
}

function deslocar_caracteres_tres_posicoes(texto){
    let novo_texto = ''
    for (let letra of texto){
        if (eh_letra_maiuscula(letra) || eh_letra_minuscula(letra)){
            novo_texto += String.fromCharCode(letra.charCodeAt() + 3);
        } else {
            novo_texto += letra
        }
    }

    return novo_texto
}

function inverte_texto(texto){
    let inverso = ''

    for (let caractere of texto){
        inverso = caractere + inverso
    }

    return inverso
}

function eh_letra_minuscula(caractere){ // 97 a 122
    return caractere.charCodeAt() >= 97 && caractere.charCodeAt() <= 122
}

function eh_letra_maiuscula(caractere){ // 65 a 90
    return caractere.charCodeAt() >= 65 && caractere.charCodeAt() <= 90
}

function eh_letra(caractere) {
    return (caractere >= 'a' && caractere <= 'z') || (caractere >= 'A' && caractere <= 'Z')
}

function get_number(texto){
    let numero = Number(question(texto))
    return numero
}

function get_text(mensagem){
    let texto = question(mensagem)
    return texto
}

main()