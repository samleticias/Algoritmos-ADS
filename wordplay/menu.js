import {eh_letra_maiuscula, inverte_texto, texto_para_caixa_baixa} from './string_utils.js'
import { readFileSync } from "fs"

export function conteudo_arquivo(){
    const dados = readFileSync('words.txt', "utf-8")
    return dados
}

// funcao para opcoes do menu
export function get_opcoes() {
    let opcoes = ['1 - Total de palavras',
        '2 - Palavras com no mínimo X letras',  
        '3 - Palavras com N+ letras',
        '4 - Palavras sem letra e',
        '5 - Palavras que não contém letras',
        '6 - Palavras que só contém letras',
        '7 - Palavras "Palíndromas"',
        '8 - Palavras "Abecedárias"',
        '9 - Palavras com +20 letras',
        '10 - Palavra(s) com maior valor ASCII',
        '11 - Quantas palavras começam, tem no meio e terminam com as letras informadas',
        '12 - Palavra com três letras duplas consecutivas',
        '0 - Sair']
    return opcoes
} 

// função para obter quantidade total de palavras
export function obter_total_de_palavras(palavras){
    let total = palavras.length
    return total
}

// função para filtrar palavras com quantidade mínima de letras
export function obter_palavras_min_letras(palavras, minimo){
    let total_palavras = 0

    for (let palavra of palavras){
        if (palavra.length >= minimo){
            total_palavras += 1
        }
    }
    return total_palavras
}

// função para filtrar palavras com 20+ letras
export function obter_palavras_mais_vinte_letras(palavras){
    let total_palavras = 0

    for (let palavra of palavras){
        if (palavra.length - 1 > 20){
            total_palavras = total_palavras + 1
        } 
    }
    return total_palavras
}

// função para filtrar palavras que nao contem letras
export function obter_palavras_nao_contem_letras(palavras, letras){
    let letras_finais = ''

    for (let letra of letras){
        if (eh_letra_maiuscula(letra)){
            letras_finais = letras_finais + texto_para_caixa_baixa(letra)
        } else {
            letras_finais = letras_finais + letra
        }
    }

    let qtd_palavras_sem_letras = 0

    for (let palavra of palavras){
        if (nao_contem_caracteres(palavra, letras_finais)){
            qtd_palavras_sem_letras += 1
        }
    }

    return qtd_palavras_sem_letras
}

// funcao para verificar se tem caractere
export function verifica_contem_caractere(texto, caractere_desejado, ignoreCase = false){
    if (ignoreCase == true){
        let caractere_desejado = texto_para_caixa_baixa(caractere_desejado)
        let texto = texto_para_caixa_baixa((texto))

        for (let i = 0; i < texto.length; i++){
            if (caractere_desejado === texto[i]){
                return true
            }
        }
    }
}

// função para verificar se naõ tem caracteres
export function nao_contem_caracteres(texto, caracteres, ignoreCase = false) {
    if (ignoreCase) {
        texto = texto_para_caixa_baixa(texto)
        caracteres = texto_para_caixa_baixa(caracteres)
    }

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < caracteres.length; j++) {
            if (texto[i] === caracteres[j]) {
                return false
            }
        }
    }

    return true
}

export function has_letter_e(palavra){
    for (let caractere of palavra){
        if (caractere.charCodeAt() == 101){
            return true
        }
    }
    return false
}

// funcao para filtrar contagem de palavras sem a letra e
export function obter_palavras_sem_letra_e(palavras){
    let total_palavras = 0

    for (let palavra of palavras){
        if (!has_letter_e(palavra)){
            total_palavras = total_palavras + 1
        }
    }
    return total_palavras
}

// funcao para verificar se a palavra é palindroma comparando com o inverso da palavra
function eh_palindroma(palavra) {
    const palavra_limpa = palavra.trim().toLowerCase()
    const palavra_invertida = inverte_texto(palavra_limpa)
    return palavra_limpa === palavra_invertida
}

// funcao para obter quantidade de palavras palindromas
export function obter_palavras_palindromas(palavras) {
    let total_palavras = 0

    for (let palavra of palavras) {
        if (eh_palindroma(palavra)) {
            total_palavras++
        }
    }
    return total_palavras
}

// funcao para listar palavras palindromas
export function listar_palavras_palindromas(palavras) {
    let palavras_palindromas = ''

    for (let palavra of palavras) {
        if (eh_palindroma(palavra)) {
            palavras_palindromas += `${palavra}\n`
        }
    }
    return palavras_palindromas
}

// funcao para obter quantidade de palavras a partir de N+ letras
export function obter_palavras_n_mais_letras(palavras, qtd_desejada){
    let total_palavras = 0

    for (let palavra of palavras){
        if (palavra.length - 1 > qtd_desejada){
            total_palavras = total_palavras + 1
        }
    }

    return total_palavras
}

// funcao para obter valor ascii da palavra percorrendo os caracteres e somando o codigo de cada um no valor total da palavra
export function obter_valor_ascii_palavra(palavra){
    let valor_ascii = 0

    for (let caractere of palavra){
        valor_ascii = valor_ascii + caractere.charCodeAt()
    }
    return valor_ascii
}

// funcao para obter a palavra com maior valor ascii
export function obter_palavra_maior_valor_ascii(palavras){
    let maior_valor = -99999999999999
    let palavra_maior = ''
    
    for (let palavra of palavras){
        let soma_char_code = obter_valor_ascii_palavra(palavra)

        if (soma_char_code > maior_valor){
            maior_valor = soma_char_code
            palavra_maior = palavra
        }
    }
    return palavra_maior
}

// funcao para obter percentual de palavras que atendem a requisito tal em relacao ao total de palavras
export function obter_percentual(qtd_palavras, total_palavras){
    return (qtd_palavras / total_palavras) * 100
}

// funcao para verificar se palavra é abecedaria 
export function eh_abecedaria(palavra) {
    palavra = palavra.trim().toLowerCase()

    for (let i = 0; i < palavra.length - 1; i++) {
        if (palavra[i] > palavra[i + 1]) {
            return false
        }
    }
    return true
}

// funcao para contar quantidade de palavras abecedarias
export function obter_total_palavras_abecedarias(palavras){
    let total_palavras = 0
    for (let palavra of palavras){
        if (eh_abecedaria(palavra)){
            total_palavras = total_palavras + 1
        }
    }
    return total_palavras
}

// funcao para listar palavras abecedarias
export function listar_palavras_abecedarias(palavras){
    let palavras_abecedarias = ''

    for (let palavra of palavras){
        if (eh_abecedaria(palavra)){
            palavras_abecedarias += `${palavra}\n`
        }
    }
    return palavras_abecedarias
}

// funcao para listar as palavras com 20+ letras
export function mostrar_palavras_mais_20_letras(palavras){
    let palavras_mais_20 = ''

    for (let palavra of palavras){
        if (palavra.length - 1 > 20){
            palavras_mais_20 += `Tamanho: ${palavra.length - 1} caracteres --> ${palavra}\n`
        }
    }
    return palavras_mais_20
}

// funcao para verificar se tem a letra proibida na palavra
export function contem_letra(palavra, letra_proibida){
    for (let caractere of palavra){
        if (caractere == letra_proibida){
            return true
        }
    }
    return false
}

// funcao para obter codigo ascii passando a letra ou caracter como parametro
export function get_ascii_code(caracter){
    return caracter.charCodeAt()
}

// funcao para obter letra ou caracter em string passando codigo ascii como parametro
export function get_caracter(codigo_ascii_caracter){
    return String.fromCharCode(codigo_ascii_caracter)
}

function eh_par(numero){
    return numero % 2 == 0
}

// ----- extra ------
// primeira letra = posicao[0], segunda letra = posicao[meio], terceira letra = posicao [tamanho - 1]
// verificar se o tamanho da palavra é par
// se for impar pega o a posicao do indice do meio
// se for par subtrai 1 do tamanho e divide por 2 
export function obter_palavras_contem_letras(palavras, tres_letras) {    
    let total_palavras = 0

    for (let palavra of palavras) {
        palavra = palavra.trim().toLowerCase()
        tres_letras = tres_letras.trim().toLowerCase()

        let tamanho = palavra.length
        let indice_meio

        if (!eh_par(tamanho)) {
            indice_meio = Math.floor(tamanho / 2)
        } else {
            indice_meio = Math.floor((0 + (tamanho - 1)) / 2)
        }

        if (
            palavra[0] === tres_letras[0] &&           
            palavra[indice_meio] === tres_letras[1] && 
            palavra[tamanho - 1] === tres_letras[2]    
        ) {
            total_palavras = total_palavras + 1
        }
    }
    return total_palavras
}

// ----- extra ------
// funcao para listar as palavras que tem as tres letras nas posicoes
// primeira letra = posicao[0], segunda letra = posicao[meio], terceira letra = posicao [tamanho - 1]
export function listar_palavras_contem_letras(palavras, tres_letras) {    
    let palavras_resultado = ''

    for (let palavra of palavras) {
        palavra = palavra.trim().toLowerCase()
        tres_letras = tres_letras.trim().toLowerCase()

        let tamanho = palavra.length
        let indice_meio

        if (!eh_par(tamanho)) {
            indice_meio = Math.floor(tamanho / 2)
        } else {
            indice_meio = Math.floor((0 + (tamanho - 1)) / 2)
        }

        if (
            palavra[0] === tres_letras[0] &&           
            palavra[indice_meio] === tres_letras[1] && 
            palavra[tamanho - 1] === tres_letras[2]    
        ) {
            palavras_resultado += `${palavra}\n`
        }
    }
    return palavras_resultado
}

// funcao para filtrar com operacao de palavras que tem apenas letras
export function obter_total_palavras_contem_letras(palavras, letras){
    let letras_finais = ''

    for (let letra of letras){
        if (eh_letra_maiuscula(letra)){
            letras_finais = letras_finais + texto_para_caixa_baixa(letra)
        } else {
            letras_finais = letras_finais + letra
        }
    }

    let qtd_palavras_com_letras = 0

    for (let palavra of palavras){
        if (contem_caracteres(palavra, letras_finais)){
            qtd_palavras_com_letras += 1
        }
    }
    return qtd_palavras_com_letras
}

// funcao para verificar se texto contem alguma letra da string informada 
export function contem_caracteres(texto, caracteres, ignoreCase = false) {
    if (ignoreCase) {
        texto = texto_para_caixa_baixa(texto)
        caracteres = texto_para_caixa_baixa(caracteres)
    }

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < caracteres.length; j++) {
            if (texto[i] === caracteres[j]) {
                return true
            }
        }
    }
    return false
}

// funcao para obter palavra com três letras duplas consecutivas
export function obter_palavra_letras_duplas_consecutivas(palavras) {
    for (let palavra of palavras) {
        if (palavra.length < 6) continue

        for (let i = 0; i <= palavra.length - 6; i++) {
            if (palavra[i] === palavra[i + 1] &&
                palavra[i + 2] === palavra[i + 3] &&
                palavra[i + 4] === palavra[i + 5]) {
                return palavra
            }
        }
    }
    return null
}









