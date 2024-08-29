def main():
    check = 0
    while True:
        numero_linhas = int(input())
        if numero_linhas == 0:
            break
        if check == 1:
            print()
        lista = []
        for i in range(numero_linhas):
            meu_append(lista, ' '.join(input().split()))
        m = max(len(i) for i in lista)

        for i in range(len(lista)):
            for j in range(m-len(lista[i])):
                print('', end=' ')
            print(lista[i])
        check = 1

def meu_append(lista, elemento):
    lista.append(elemento)
    return lista

main()

