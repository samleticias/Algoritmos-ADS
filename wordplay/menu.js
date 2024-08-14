import {eh_consoante, eh_letra_maiuscula, inverte_texto, eh_letra_minuscula, texto_para_caixa_baixa, eh_letra} from './string_utils.js'
import { readFileSync } from "fs"

export function conteudo_arquivo(){
    const dados = readFileSync('words.txt', "utf-8")
    return dados
}

// funcao para opcoes do menu
export function opcoes() {
    let opcoes = ['1 - Total de palavras',
        '2 - Palavras com no mínimo X letras',  
        '3 - Palavras com N+ letras',
        '4 - Palavras sem letra e',
        '5 - Palavras que não contém letras',
        '6 - Palavras que contem todas as letras',
        '7 - Palavras que só contém letras',
        '8 - Quantas palavras contém mais vogais que consoantes',
        '9 - Palavras "Palíndromas"',
        '10 - Palavras "Abecedárias"',
        '11 - Palavras com +20 letras',
        '12 - Palavra(s) com maior valor ASCII',
        '13 - Somatório ASCII das Palavras de Tamanho Múltiplo de N',
        '14 - Contar/listar palavras que começam e terminam com a mesma letra',
        '15 - Quantas palavras contém mais consoantes que vogais',
        '16 - Quantas palavras contém a mesma quantidade de vogais e consoantes',
        '17 - Quantas palavras começam e terminam com as letras informadas',
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
    let qtd_palavras = 0

    for (let palavra of palavras){
        if (palavra.length >= minimo){
            qtd_palavras += 1
        }
    }

    return qtd_palavras
}

// função para filtrar palavras com 20+ letras
export function obter_palavras_mais_vinte_letras(palavras){
    let total_palavras = 0

    for (let palavra of palavras){
        if (palavra.length > 20){
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

// funcao para filtrar com operacao de palavras que tem apenas letras
export function obter_total_palavras_contem_apenas_letras(palavras, letras){
    let total_palavras = 0

    for (let palavra of palavras){
        if (usa_somente(palavra, letras)){
            total_palavras = total_palavras + 1
        }
    }
    return total_palavras
}

// funcao para verificar se usa caractere
export function usa_somente(texto, caracteres, ignoreCase = false) {
    if (ignoreCase) {
        texto = texto_para_caixa_baixa(texto)
        caracteres = texto_para_caixa_baixa(caracteres)
    }

    let contador = 0
    
    for (let i = 0; i < texto.length; i++) {
        for (let caractere of caracteres){
            if (texto[i] == caractere){
                contador = contador + 1
            }
            if (contador >= texto.length){
                return true
            }
        }
    }

    return false
}

// funcao para contar palavras que possuem todas as letras
export function conta_palavras_com_todas_letras(palavras){
    let letras = 'abcdefghijklmnopqrstuvwxyz'
    let total_palavras = 0

    for (let palavra of palavras){
        let possui_todas_letras = true

        for (let letra of letras){
            let letra_encontrada = false
             for (let caractere of palavra.toLowerCase()){
                if (caractere == letra){
                    letra_encontrada = true
                    break
                } 
             }

             if(!letra_encontrada){
                possui_todas_letras = false
                break
             }
        }

        if (possui_todas_letras){
            total_palavras += 1
        }
    }

    return total_palavras
}

// funcao para obter quantidade de palavras com mais vogais que consoantes
export function obter_palavras_com_mais_vogais(palavras){
    let total_palavras = 0

    for (let palavra of palavras){
        let qtd_consoantes = 0
        let qtd_vogais = 0

        for (let letra of palavra){
            if (eh_consoante(letra)){
                qtd_consoantes = qtd_consoantes + 1
            }
            if (!eh_consoante(letra)){
                qtd_vogais = qtd_vogais + 1
            }
        }

        if (qtd_vogais > qtd_consoantes){
            total_palavras += 1
        }
    }

    return total_palavras
}

// funcao para obter quantidade de palavras com mais consoantes que vogais
export function obter_palavras_com_mais_consoantes(palavras){
    let total_palavras = 0

    for (let palavra of palavras){
        let qtd_consoantes = 0
        let qtd_vogais = 0

        for (let letra of palavra){
            if (eh_consoante(letra)){
                qtd_consoantes = qtd_consoantes + 1
            }
            if (!eh_consoante(letra)){
                qtd_vogais = qtd_vogais + 1
            }
        }

        if (qtd_consoantes > qtd_vogais){
            total_palavras = total_palavras + 1
        }
    }
    return total_palavras
}

// funcao para filtrar contagem de palavras sem a letra e
export function obter_palavras_sem_letra_e(palavras){
    let total_palavras = 0

    for (let palavra of palavras){
        for (let caractere of palavra){
            if (caractere.charCodeAt() == 101){
                total_palavras = total_palavras + 1
            }
        }
    }
    return total_palavras
}

// funcao para obter quantidade de palavras palindromas
export function obter_palavras_palindromas(palavras){
    let total_palavras = 0

    for (let palavra of palavras){
        let palavra_invertida = inverte_texto(palavra)
        if (palavra == palavra_invertida){
            total_palavras = total_palavras + 1
        }
    }
    return total_palavras
}

// funcao para obter quantidade de palavras a partir de N+ letras
export function obter_palavras_n_mais_letras(palavras, qtd_desejada){
    let total_palavras = 0

    for (let palavra of palavras){
        if (palavra.length > qtd_desejada){
            total_palavras = total_palavras + 1
        }
    }

    return total_palavras
}

// funcao para filtar e contar palavras que começam e terminam com a mesma letra
export function contar_palavras_mesma_letra(palavras){
    let total_palavras = 0

    for (let palavra of palavras){
        if (palavra[0] == palavra[palavra.length - 1]){
            total_palavras += 1
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

// funcao para obter somatorio ascii das palavras de tamanho multiplo de N
export function obter_somatorio_palavras_ascii_multiplo_n(palavras, n){
    let somatorio_ascii = 0

    for (let palavra of palavras){
        if (obter_tamanho_multiplo(palavra, n)){
            let valor_ascii_palavra = obter_valor_ascii_palavra(palavra)
            somatorio_ascii = somatorio_ascii + valor_ascii_palavra
        }
    }
    return somatorio_ascii
}

// funcao para contar quantidade de palavras no somatório ASCII para palavras com tamanho multiplo de N
export function conta_palavras_somatorio_ascii_multiplo_n(palavras, n){
    let total_palavras = 0

    for (let palavra of palavras){
        if (obter_tamanho_multiplo(palavra, n)){
            total_palavras = total_palavras + 1
        }
    }
    return total_palavras
}

// funcao para verificar se o tamanho da palavra é multiplo do numero informado (opcao somatorio ascii)
export function obter_tamanho_multiplo(palavra, numero) {
    return palavra.length % numero === 0
}

// funcao para obter percentual de palavras que atendem a requisito tal em relacao ao total de palavras
export function obter_percentual(qtd_palavras, total_palavras){
    return (qtd_palavras / total_palavras) * 100
}

// mesma função para verificar se é divisor
export function eh_multiplo(a, b){
    return a % b == 0
}

// funcao para verificar se palavra é abecedaria 
export function eh_abecedaria(palavra) {
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

// funcao para obter total de palavras que tem mesma quantidade de vogais e consoantes
export function obter_palavras_com_mesma_quantidade_vogais_consoantes(palavras){
    let total_palavras = 0

    for (let palavra of palavras){
        let qtd_consoantes = 0
        let qtd_vogais = 0

        for (let letra of palavra){
            if (eh_consoante(letra)){
                qtd_consoantes = qtd_consoantes + 1
            }
            if (!eh_consoante(letra)){
                qtd_vogais = qtd_vogais + 1
            }
        }

        if (qtd_consoantes == qtd_vogais){
            total_palavras = total_palavras + 1
        }
    }
    return total_palavras
}

// funcao para obter quantidade de palavras que começam e terminam com as letras informadas pelo usuario
export function contar_palavras_comecam_terminam_letras_informadas(palavras, primeira_letra, segunda_letra){
    let total_palavras = 0

    for (let palavra of palavras){
        if (palavra[0] == primeira_letra && palavra[palavra.length - 1] == segunda_letra){
            total_palavras += 1
        }
    }
    return total_palavras
}






