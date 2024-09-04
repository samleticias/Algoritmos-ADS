import { question } from "readline-sync"

function main(){
    let linha = get_positive_number('Linha: ')

    let operacao = get_text('Operação (S/M): ')
    
    let matriz = gerar_matriz(12, 12)

    preencher_matriz(matriz)

    let resultado = obter_operacao(matriz, linha, operacao)

    print(resultado)

}

function obter_operacao(matriz, linha, operacao){
    let somatorio = 0
    for (let numero of matriz[linha]){
        somatorio = somatorio + numero
    }

    let media = somatorio / meu_length(matriz[linha])

    if (operacao == 'S'){
        return somatorio
    } else {
        return media
    }
}

function preencher_matriz(matriz){
    for (let linha of matriz){
        for (let coluna of matriz[linha]){
            matriz[linha][coluna] = get_number().toFixed(2)
        }
    }
}

function gerar_matriz(linhas, colunas){
    let matriz = []
    for (let i = 0; i < linhas; i++){
        meu_push(matriz, gerar_vetor(colunas))
    }
    return matriz
}

function meu_length(vetor){
    let tamanho = 0
    for (let elemento of vetor){
        tamanho = tamanho + 1
    }
    return tamanho
}

function gerar_vetor(tamanho){
    let vetor = []
    for (let i = 0; i < tamanho; i++){
        meu_push(vetor, 0.0)
    }
    return vetor
}

function meu_push(lista, elemento){
    lista.push(elemento)
    return lista
}

function get_number(texto){
    let numero = Number(question(texto))
    return numero
}

function get_text(mensagem){
    let texto = question(mensagem)
    return texto
}

function get_positive_number(mensagem){
    let numero = get_number(mensagem)
    while (numero < 0){
        print('O número deve ser positivo!')
        numero = get_number
    }
    return numero
}

function print(mensagem){
    console.log(mensagem)
}

main()