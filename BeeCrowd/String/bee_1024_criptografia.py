def main():
    import sys
    input = sys.stdin.read
    data = input().strip().split('\n')

    N_linhas = int(data[0])

    for i in range(1, N_linhas + 1):
        caso = data[i]

        caso = deslocar_caracteres_tres_posicoes(caso)
        caso = inverte_texto(caso)
        caso = deslocar_metade_para_tras(caso)

        print(caso)

def obter_segunda_metade_string(texto):
    return texto[len(texto) // 2:]

def unir_textos(str1, str2):
    return str1 + str2

def obter_primeira_metade_string(texto):
    return texto[:len(texto) // 2]

def deslocar_metade_para_tras(texto):
    primeira_metade = obter_primeira_metade_string(texto)
    segunda_metade = obter_segunda_metade_string(texto)

    nova_segunda_metade = ''.join(chr(ord(letra) - 1) for letra in segunda_metade)

    return unir_textos(primeira_metade, nova_segunda_metade)

def deslocar_caracteres_tres_posicoes(texto):
    novo_texto = ''.join(
        chr(ord(letra) + 3) if eh_letra(letra) else letra
        for letra in texto
    )
    return novo_texto

def inverte_texto(texto):
    return texto[::-1]

def eh_letra(caractere):
    return 'a' <= caractere <= 'z' or 'A' <= caractere <= 'Z'

if __name__ == '__main__':
    main()
