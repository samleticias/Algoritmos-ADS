def main():
    linhas, colunas = map(int, input().split(' '))
    matriz = gerar_matriz(linhas)
    adicionar_elementos(matriz, linhas, colunas)
    for linha in range(linhas):
        for coluna in range(colunas):
            if matriz[linha][coluna] == 42:
                if possui_setes_proximos(matriz, linha, coluna):
                    print(linha+1, coluna+1)
                    return
    
    print("0 0")

def possui_setes_proximos(matriz, x, y):
    if (x > meu_length(matriz) - 2 or x == 0) or (y > meu_length(matriz[0]) - 2 or y == 0):
        return False

    return True if (matriz[x-1][y-1] == 7 and matriz[x][y-1] == 7 and matriz[x+1][y-1] == 7 and\
    matriz[x-1][y] == 7 and matriz[x+1][y] == 7 and \
    matriz[x-1][y+1] == 7 and matriz[x][y+1] == 7 
    and matriz[x+1][y+1] == 7) else False

def adicionar_elementos(matriz, linhas, colunas):
    for i in range(linhas):
        matriz[i] = list(map(int, input().split(' ')))

def gerar_matriz(x):
    return [[] for i in range(x)]

def meu_length(colecao):
    tamanho = 0
    for elemento in colecao:
        tamanho = tamanho + 1
    return tamanho

main()