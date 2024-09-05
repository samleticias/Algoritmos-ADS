def main():
    # linhas, colunas =  meu_map(meu_split(input(), ' '), int)
    operacao = get_text()

    matriz = gerar_matriz(12, 12)

    preencher_matriz(matriz)

    resultado = obter_operacao(matriz, operacao)

    print(f'{resultado:.1f}')

def obter_operacao(matriz, operacao):
    qtd_elementos = 0
    somatorio = 0
    tamanho_linha = 12

    for linha in range(meu_length(matriz)):
        tamanho_linha -= 1
        for coluna in range(meu_length(matriz[linha])):
            if coluna > tamanho_linha:
                somatorio = somatorio + matriz[linha][coluna]
                qtd_elementos += 1

    media = somatorio / qtd_elementos

    if operacao == 'S':
        return somatorio
    return media

def gerar_matriz(linhas, colunas):
    matriz = []
    for i in range(linhas):
        meu_append(matriz, gerar_vetor(colunas))
    return matriz

def gerar_vetor(tamanho):
    vetor = []
    for i in range(tamanho):
        meu_append(vetor, ' ')
    return vetor

def preencher_matriz(matriz):
    for linha in range(meu_length(matriz)):
        for coluna in range(meu_length(matriz[linha])):
            matriz[linha][coluna] = float(input())

def get_float_number():
    return float(input())

def get_text():
    return input()

def meu_split(texto, splitador):
    texto_splitado = []
    parte_atual = ""
    
    for elemento in texto:
        if elemento != splitador:
            parte_atual += elemento  
        else:
            meu_append(texto_splitado, parte_atual)  
            parte_atual = "" 
    
    if parte_atual:
        meu_append(texto_splitado, parte_atual)
    
    return texto_splitado

def meu_map(colecao, funcao_transformadora):
    for i in range(meu_length(colecao)):
        colecao[i] = funcao_transformadora(colecao[i])
    return colecao

def meu_append(lista, elemento):
    lista.append(elemento)
    return lista

def meu_length(colecao):
    tamanho = 0
    for elemento in colecao:
        tamanho = tamanho + 1
    return tamanho

main()