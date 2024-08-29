def main():
    qtd_casos_teste = int(input())

    for _ in range(qtd_casos_teste):
        texto_cifra_cesar = input()
        posicoes_deslocadas_para_subtrair = int(input())

        texto_original = deslocar_posicoes_para_esquerda(texto_cifra_cesar, posicoes_deslocadas_para_subtrair)
        print(texto_original)

def deslocar_posicoes_para_esquerda(palavra, qtd_posicoes):
    nova_palavra = ''
    for letra in palavra:
        codigo_letra = ord(letra) - ord('A')
        novo_codigo_letra = (codigo_letra - qtd_posicoes) % 26
        letra_modificada = chr(novo_codigo_letra + ord('A'))
        nova_palavra += letra_modificada

    return nova_palavra

if __name__ == "__main__":
    main()
