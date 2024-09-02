def main():
    matriz = []
    operacao = input()

    for i in range(12):
        meu_append(matriz, [])
        for j in range(12):
            numero = float(input())
            meu_append(matriz[i], numero)

    soma = 0
    quantidade_elementos = 0
    col = 11
    for i in range(1,11):
        for j in range(col,12):
            soma += matriz[i][j]
        
            quantidade_elementos += 1
        if i < 5:
            col -= 1
        if i > 5:
            col += 1

    media = soma / quantidade_elementos

    if operacao == "S":
        print('{:.1f}'.format(soma))
    else:
        print('{:.1f}'.format(media))

def meu_append(lista, elemento):
    lista.append(elemento)
    return lista

main()