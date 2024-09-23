def main():
    qtd_casos_teste = int(input())

    for _ in range(qtd_casos_teste):
        entrada = input()

        valor1, valor2 = entrada.split()

        verificacao = encaixa(valor1, valor2)

        if verificacao:
            print('encaixa')
        else:
            print('nao encaixa')

def encaixa(primeira_string, segunda_string):
    tamanho_primeira = len(primeira_string)
    tamanho_segunda = len(segunda_string)

    if tamanho_segunda > tamanho_primeira:
        return False

    final_primeira = primeira_string[-tamanho_segunda:]

    return final_primeira == segunda_string

if __name__ == "__main__":
    main()
