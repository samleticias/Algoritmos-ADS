function main(){
    let coluna = get_positive_number('Coluna: ')

    let operacao = get_text('Operação: ')

    let matriz = gerar_matriz(12, 12)

    preencher_matriz(matriz)

    let resultado = obter_operacao(matriz, coluna, operacao)

    print(resultado)
}

function obter_operacao(matriz, coluna, operacao){
    let somatorio = 0
    let qtd_elementos = 0

    for (let linha of matriz){
        for (let coluna_matriz of matriz[linha]){
            if (coluna_matriz == coluna){
                somatorio = somatorio + matriz[linha][coluna_matriz]
                qtd_elementos = qtd_elementos + 1
            }
        }
    }

    let media = somatorio / qtd_elementos

    if (operacao == 'S'){
        return somatorio
    } else {
        return media
    }
}

function preencher_matriz(matriz){
    for (let linha in matriz){
        for (let coluna of matriz[linha]){
            matriz[linha[coluna]] = get_number('Número: ')
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