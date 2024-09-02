import { question } from "readline-sync"


function main(){
    let qtd_casos_teste = get_number('Qtd Casos de Teste: ')

    for (let i = 0; i < qtd_casos_teste; i++){
        let texto_cifra_cesar = get_text('Texto: ')
        let posicoes_deslocadas_para_subtrair = get_number('Qtd. Posições: ')

        let texto_original = deslocar_posicoes_para_esquerda(texto_cifra_cesar, posicoes_deslocadas_para_subtrair)
        console.log(`Texto Original: ${texto_original}`)
    }
}

function deslocar_posicoes_para_esquerda(palavra, qtd_posicoes){
    let nova_palavra = ''

    for (let letra of palavra){
        let codigo_letra = ord(letra) - ord('A')
        let novo_codigo_letra = (codigo_letra - qtd_posicoes) % 26
        let letra_modificada = chr(novo_codigo_letra - ord('A'))
        nova_palavra += letra_modificada
    }
    return nova_palavra
}

function chr(codigo){
    return String.fromCharCode(codigo)
}

function ord(letra){
    return letra.charCodeAt()
}

function get_number(texto){
    return Number(question(texto))
}

function get_text(mensagem){
    return question(mensagem)
}

main()