def main():
    linha = int(input())
    
    operacao = input()

    matriz = gerar_matriz(12, 12)

    preencher_matriz(matriz)

    resultado_operacao = obter_operacao(linha, matriz, operacao)

    print(resultado_operacao)

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

def obter_operacao(linha, matriz, operacao):
    somatorio = 0

    for numero in matriz[linha]:
        somatorio = somatorio + numero

    media = somatorio / meu_length(matriz[linha])

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