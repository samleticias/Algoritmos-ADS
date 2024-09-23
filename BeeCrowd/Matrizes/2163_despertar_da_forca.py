def main():
    linhas, colunas = meu_map(meu_split(input(), ' '), int)

    matriz = gerar_matriz(linhas, colunas)

    preencher_matriz(matriz)

    for linha in range(linhas):
        for coluna in range(colunas):
            if matriz[linha][coluna] == '42':  
                if possui_setes_proximos(matriz, linha, coluna):
                    print(linha+1, coluna+1)
                    return
    
    print("0 0")


def preencher_matriz(matriz):
    for linha in range(meu_length(matriz)):
        matriz[linha] = meu_split(input(), ' ')

def possui_setes_proximos(matriz, x, y):
    if (x > meu_length(matriz) - 2 or x == 0) or (y > meu_length(matriz[0]) - 2 or y == 0):
        return False

    return (
        matriz[x-1][y-1] == '7' and matriz[x][y-1] == '7' and matriz[x+1][y-1] == '7' and
        matriz[x-1][y] == '7' and matriz[x+1][y] == '7' and
        matriz[x-1][y+1] == '7' and matriz[x][y+1] == '7' and matriz[x+1][y+1] == '7'
    )

def show_matriz(matriz):
    print('\n>>>> Matriz Preenchida <<<<\n')
    print('-----------------------------')
    for linha in matriz:
        print(' '.join(linha))
    print('-----------------------------\n')

def gerar_matriz(linhas, colunas):
    matriz = []
    for i in range(linhas):
        meu_append(matriz, gerar_vetor(colunas))
    return matriz

def gerar_vetor(tamanho):
    vetor = []
    for i in range(tamanho):
        meu_append(vetor, "")
    return vetor

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
