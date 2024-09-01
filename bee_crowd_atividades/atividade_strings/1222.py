def main():
    while True:
        try:
            n_palavras_conto, n_max_linhas_por_pagina, n_max_caracteres_por_linha = [int(x) for x in input().split()]
            palavra = input()
            pagina = 1
            linha = 0
            caracter = 0
            tamanho = meu_length(palavra)
            i = 0

            while i < tamanho:
                while palavra[i] == ' ' and (caracter == 0 or caracter == n_max_caracteres_por_linha):
                    i += 1
                if caracter == n_max_caracteres_por_linha:
                    linha += 1
                    caracter = 0
                if linha == n_max_linhas_por_pagina:
                    pagina += 1
                    linha = 0
                i += 1
                caracter += 1

            print(pagina)

        except EOFError:
            break

def meu_length(texto):
    tamanho = 0
    for caracter in texto:
        tamanho = tamanho + 1
    return tamanho

main()