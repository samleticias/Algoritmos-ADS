def imprimir_matriz(matriz, largura):
    ordem = meu_length(matriz)
    espaco = " "
    if ordem != 2:
        for i in range(ordem):
            for j in range(ordem):
                comprimento_numero = meu_length(str(matriz[i][j]))
                espacos_necessarios = largura - comprimento_numero
                if j == 0:
                    print(f"{espaco * espacos_necessarios}{matriz[i][j]}", end="")
                elif j == ordem - 1:
                    print(f" {espaco * espacos_necessarios}{matriz[i][j]}")
                else:
                    print(f" {espaco * espacos_necessarios}{matriz[i][j]}", end="")
    else:
        print("1 2\n2 4")
    print("")

def main():
    while True:
        ordem = int(input())
        print("")
        if ordem == 0:
            break
        if ordem == 1:
            valor = 1
            print(f"{valor}")
        else:
            matriz = []
            maior_valor = 0
            for i in range(ordem):
                linha = []
                for j in range(ordem):
                    valor = 2**(i + j)
                    if valor > maior_valor:
                        maior_valor = valor
                    meu_append(linha, valor)
                meu_append(matriz, linha)
            maior_valor_str = str(maior_valor)
            largura = meu_length(maior_valor_str)
            imprimir_matriz(matriz, largura)

def meu_length(texto):
    tamanho = 0
    for elemento in texto:
        tamanho += 1
    return tamanho

def meu_append(lista, elemento):
    lista.append(elemento)
    return lista

main()
