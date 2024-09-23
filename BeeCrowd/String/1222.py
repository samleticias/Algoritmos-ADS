def main():
    numero_palavras, numero_max_linhas, numero_max_caracteres = map(int, input().split())
    conto = input()
    while True:
        try:
            qtd_paginas = encontrar_qtd_paginas(conto, numero_max_linhas, numero_max_caracteres)
            print(qtd_paginas)
            numero_palavras, numero_max_linhas, numero_max_caracteres = map(int, input().split())
            conto = input()
        except EOFError:
            break


def encontrar_qtd_paginas(conto, numero_max_linhas, numero_max_caracteres):
    qtd_linhas = 1
    qtd_paginas = 1
    qtd_caracteres = 0

    palavras = conto.split(' ')

    for palavra in palavras:
        tamanho_palavra = len(palavra)

        if tamanho_palavra + qtd_caracteres <= numero_max_caracteres:
            qtd_caracteres += tamanho_palavra
            if qtd_caracteres < numero_max_caracteres:
                qtd_caracteres += 1
        else:
            qtd_linhas = qtd_linhas + 1
            qtd_caracteres = tamanho_palavra + 1
               
        if qtd_linhas > numero_max_linhas:
            qtd_paginas += 1
            qtd_linhas = 1

    return qtd_paginas

if __name__ == '__main__':
    main()