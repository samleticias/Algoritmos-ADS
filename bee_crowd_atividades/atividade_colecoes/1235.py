def main():
    numero_casos_teste = int(input())
    contador = 0

    while contador < numero_casos_teste:
        palavra =  input()
        primeira_metade = palavra[0:(len(palavra)//2)]
        segunda_metade = palavra[(len(palavra)//2):]
        nova_frase = inverte_texto(primeira_metade) + inverte_texto(segunda_metade)
        print(nova_frase)

        contador = contador + 1

def inverte_texto(palavra):
    inverso = ''
    for letra in palavra:
        inverso = letra + inverso
    return inverso

main()