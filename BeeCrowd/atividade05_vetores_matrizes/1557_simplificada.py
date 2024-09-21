def main():
    caso_teste = int(input())
    while caso_teste != 0:
        for i in range(caso_teste):
            for j in range(caso_teste):
                valor = 2**(i+j)
                print("%{}d".format(meu_length(str(4**(caso_teste-1)))) %(valor), end = '')
                if (j != caso_teste-1):
                    print(end = ' ')
            print()
        print()
        caso_teste = int(input())

def meu_length(colecao):
    tamanho = 0
    for elemento in colecao:
        tamanho = tamanho + 1
    return tamanho

main()