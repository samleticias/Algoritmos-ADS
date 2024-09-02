def main():
    alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    quantidade_casos_teste = int(input())

    for i in range(quantidade_casos_teste):
        numero_linhas = int(input())
        soma = 0

        for numero in range(numero_linhas):
            texto = input()
            caractere_index = 0

            for caractere in texto:
                soma += alfabeto.index(caractere) + numero + caractere_index
                caractere_index += 1
        
        print(soma)

main()