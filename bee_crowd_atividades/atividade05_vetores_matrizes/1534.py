def main():
    while True:
        try:
            tamanho = int(input())

            resultado =  []

            col2 = tamanho - 1
            for i in range(tamanho):
                linha_atual = []
                for j in range(tamanho):
                    if(j == col2):
                        meu_append(linha_atual, 2)
                        col2 -= 1
                    else:
                        if(i == j):
                            meu_append(linha_atual, 1)
                        else:
                            meu_append(linha_atual, 3)
                meu_append(resultado, linha_atual)

            for i in range(tamanho):
                linha = ''
                for j in range(tamanho):
                    linha += str(resultado[i][j])
                print(linha)
        except EOFError:
            break

def meu_append(lista, elemento):
    lista.append(elemento)
    return lista

main()