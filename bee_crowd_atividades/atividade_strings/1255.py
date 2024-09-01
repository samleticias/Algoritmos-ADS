def main():
    letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    quantidade_casos_teste = int(input())

    for n in range(quantidade_casos_teste):
        letras_valores = []
        valores = []
        texto = texto_para_caixa_baixa(input())
        maior = 1

        for caractere in texto:
            try:
                index = letras.index(caractere)
                try:
                    letras_valores_index = letras_valores.index(caractere)
                    valores[letras_valores_index] += 1          
                    if valores[letras_valores_index] > maior:
                        maior = valores[letras_valores_index]
                except ValueError:
                    letras_valores.insert(meu_length(letras_valores), caractere)
                    valores.insert(meu_length(valores), 1)
            except ValueError:
                continue
        
        maiores_letras = []

        for i in range(len(valores)):
            if valores[i] == maior:
                maiores_letras.insert(meu_length(maiores_letras), letras_valores[i])

        maiores_letras = sorted(maiores_letras)
        texto = ""

        for maior_letra in maiores_letras:
            texto += maior_letra

        print(texto)

def meu_length(texto):
    tamanho = 0
    for elemento in texto:
        tamanho = tamanho + 1
    return tamanho

def eh_letra_maiuscula(caracter):
    if ord(caracter) >= 65 and ord(caracter) <= 90:
        return True
    return False

def eh_letra_minuscula(caracter):
    if ord(caracter) >= 97 and ord(caracter) <= 122:
        return True
    return False

def texto_para_caixa_baixa(palavra):
    novo_texto = ''
    for letra in palavra:
        if eh_letra_minuscula(letra):
            novo_texto = novo_texto + letra
        else:
            novo_texto = novo_texto + chr(ord(letra) + 32)
    return novo_texto

main()