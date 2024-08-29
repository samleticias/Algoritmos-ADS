def main():
    casos_teste = int(input())
    contador = 0

    while contador < casos_teste:
        numero_estudantes = int(input())
        lista_nomes = input().split(' ')
        lista_frequencia = input().split(' ')
        lista_faltosos = obter_lista_faltosos(lista_frequencia, lista_nomes)
        print(remove_virgulas(lista_faltosos))
        contador += 1

def remove_virgulas(lista):
    return ' '.join(lista)

def obter_lista_faltosos(lista_frequencia, lista_nomes):
    lista_faltosos = []

    for i in range(len(lista_frequencia)):
        frequencia = lista_frequencia[i]
        total_aulas = meu_length(frequencia)
        presencas = 0
        aulas_validas = 0

        for caracter in frequencia:
            if caracter != 'M':
                aulas_validas += 1
                if caracter == 'P':
                    presencas += 1

        if (presencas / aulas_validas) * 100 < 75:
            meu_push(lista_faltosos, lista_nomes[i])

    return lista_faltosos

def meu_length(texto):
    return len(texto)

def meu_push(lista, elemento):
    lista.append(elemento)

if __name__ == "__main__":
    main()
