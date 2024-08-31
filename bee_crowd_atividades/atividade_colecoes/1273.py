def main():
    while True:
        numero_palavras = int(input())
        palavras = []
        maior = 0

        if numero_palavras == 0:
            break
        
        for n in range(numero_palavras):
            palavra = input()
            meu_insert(palavras, meu_length(palavras), palavra)
            if meu_length(palavra) > maior:
                maior = meu_length(palavra)

        for palavra in palavras:
            espacos = maior - meu_length(palavra)
            nova_palavra = ""
            
            for i in range(espacos):
                nova_palavra += " "
            
            nova_palavra += palavra
            print(nova_palavra)
        print("")

def meu_length(texto):
    tamanho = 0
    for elemento in texto:
        tamanho = tamanho + 1
    return tamanho

def meu_insert(lista, index, elemento):
    lista[index:index] = [elemento]

def meu_append(lista, elemento):
    lista.append(elemento)
    return lista

main()