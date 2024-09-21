def main():
    coluna = int(input())
    
    operacao = input()

    matriz = gerar_matriz(12, 12)

    preencher_matriz(matriz)

    resultado_operacao = obter_operacao(coluna, matriz, operacao)

    print(f'{resultado_operacao:.1f}')

def gerar_matriz(linhas, colunas):
    matriz = []
    for i in range(linhas):
        meu_append(matriz, gerar_vetor(colunas))
    return matriz

def preencher_matriz(matriz):
    for linha in range(meu_length(matriz)):
        for coluna in range(meu_length(matriz[linha])):
            matriz[linha][coluna] = float(input())

def meu_append(lista, elemento):
    lista.append(elemento)
    return lista

def obter_operacao(coluna, matriz, operacao):
    somatorio = 0
    quantidade_elementos = 0

    for linha in range(meu_length(matriz)):
        for coluna_matriz in range(meu_length(matriz[linha])):
            if coluna_matriz == coluna:
                somatorio = somatorio + matriz[linha][coluna_matriz]
                quantidade_elementos = quantidade_elementos + 1
    
    media = somatorio / quantidade_elementos

    if operacao == 'S':
        return somatorio
    else:
        return media

def gerar_vetor(tamanho):
    vetor = []
    for i in range(tamanho):
        meu_append(vetor, 0.0)
    return vetor

def meu_length(vetor):
    tamanho = 0
    for elemento in vetor:
        tamanho = tamanho + 1
    return tamanho
    
main()