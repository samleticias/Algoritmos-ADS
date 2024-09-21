def main():
    ordem = int(input('Ordem da matriz: '))
    valor_padrao = int(input('Valor padrão: '))

    matriz = gerar_matriz(ordem)

    show_matriz2(matriz, '\n<--- Matriz vazia --->\n')

    preencher_matriz(valor_padrao, matriz)

    show_matriz1(matriz, '\n<--- Matriz resetada com valor padrão --->\n')
    show_matriz2(matriz, '\n<--- Matriz resetada com valor padrão --->\n')

def gerar_matriz(ordem):
    matriz = []
    for i in range(ordem):
        meu_append(matriz, gerar_vetor(ordem))
    return matriz

def preencher_matriz(valor_padrao, matriz):
    for linha in range(meu_length(matriz)):
        for coluna in range(meu_length(matriz[linha])):
            matriz[linha][coluna] = valor_padrao

def gerar_vetor(tamanho):
    vetor = []
    for i in range(tamanho):
        meu_append(vetor, 0)
    return vetor

def meu_length(vetor):
    tamanho = 0
    for elemento in vetor:
        tamanho = tamanho + 1
    return tamanho
        
def meu_append(lista, elemento):
    lista.append(elemento)
    return lista

# def show_matriz(matriz, texto):
#     print(texto)
#     for linha in matriz:
#         for numero in linha:
#           print(str(linha) + '\n')

def show_matriz1(matriz, texto):
    print(texto)
    for linha in matriz:
        linha_formatada = ' '.join(str(numero) for numero in linha)
        print(linha_formatada)

def show_matriz2(matriz, texto):
    print(texto)
    for linha in matriz:
        linha_formatada = ' '.join(f'{numero:3}' for numero in linha)
        print(linha_formatada)

main()