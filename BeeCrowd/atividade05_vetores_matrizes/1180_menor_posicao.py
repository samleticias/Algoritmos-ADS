def main():
    N = int(input())
    dados = input().split(' ')
    valores = mapear(dados, int)
    posicao_menor = obter_posicao_menor(valores)
    # menor_valor = obter_menor_valor(valores)
    print(f'Menor valor: {valores[posicao_menor]}')
    print(f'Posicao: {posicao_menor}')

def mapear(colecao, funcao):
    for i in range(meu_length(colecao)):
        colecao[i] = funcao(colecao[i])
    return colecao

# def obter_menor_valor(colecao):
#     menor_valor = colecao[0]
#     for i in range(len(colecao)):
#         if colecao[i] < menor_valor:
#             menor_valor = colecao[i]
#     return menor_valor

def obter_posicao_menor(colecao):
    posicao = 0
    for i in range(1, meu_length(colecao)):
        if colecao[i] < colecao[posicao]:
            posicao = i
    return posicao

def meu_length(colecao):
    tamanho = 0
    for elemento in colecao:
        tamanho =  tamanho + 1
    return tamanho

main()