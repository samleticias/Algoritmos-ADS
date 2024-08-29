import { question } from "readline-sync";

function main(){
    let qtd_casos_teste = get_number('Qtd. Casos de Teste: ')

    for (let i = 0; i < qtd_casos_teste; i++){
        let caso = get_text('Texto: ')
        let texto_fatiado = quebrar_em_duas(caso)
        let texto_combinado = combina_letras(texto_fatiado[0], texto_fatiado[1])
        console.log('Texto combinado: '+ texto_combinado)
    }
}

function quebrar_em_duas(str) {
    const espaco_index = str.indexOf(' ')
    
    if (espaco_index === -1) {
        return [str, '']
    }
    const primeira_parte = str.substring(0, espaco_index)
    const segunda_parte = str.substring(espaco_index + 1)

    return [primeira_parte, segunda_parte]
}

// alternando as letras de cada string, começando com a primeira letra da primeira string, 
// seguido pela primeira letra da segunda string, em seguida pela segunda letra da primeira string, e assim sucessivamente. 
function combina_letras(primeira_string, segunda_string) {
    let nova_palavra = ''
    let comprimento_maximo = Math.max(primeira_string.length, segunda_string.length)

    for (let i = 0; i < comprimento_maximo; i++) {
        if (i < primeira_string.length) {
            nova_palavra += primeira_string[i]
        }
        if (i < segunda_string.length) {
            nova_palavra += segunda_string[i]
        }
    }
    return nova_palavra
}

function remover_espacos(texto) {
    return texto.replace(/\s+/g, '')
}

function get_number(texto){
    return Number(question(texto))
}

function get_text(mensagem){
    return question(mensagem)
}

main()