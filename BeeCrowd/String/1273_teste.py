def meu_length(texto):
    tamanho = 0
    for caracter in texto:
        tamanho += 1
    return tamanho

def meu_append(lista, elemento):
    lista.append(elemento)
    return lista

def main():
    numero_palavras = int(input())
    
    while numero_palavras != 0:
        
        palavras = []
        max_len = 0

        for _ in range(numero_palavras):
            palavra = input()
            meu_append(palavras, palavra)
            max_len = max(max_len, meu_length(palavra))

        for palavra in palavras:
            espacos_necessarios = max_len - meu_length(palavra)
            print(' ' * espacos_necessarios + palavra)
        
        print()

        numero_palavras = int(input())

main()
