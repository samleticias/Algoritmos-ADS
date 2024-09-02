def main():
    while True:
        try:
            frase = input()
            texto_splitado = frase.split(' ')
            aliteracao = 0
            ultima_letra = ""
            em_aliteracao = False

            for elemento in texto_splitado:
                if meu_length(elemento) > 0:  
                    letra_atual = texto_para_caixa_baixa(elemento[0])
                    
                    if letra_atual == ultima_letra and not em_aliteracao:
                        aliteracao += 1
                        em_aliteracao = True
                    elif letra_atual != ultima_letra:
                        ultima_letra = letra_atual
                        em_aliteracao = False

            print(aliteracao)
        except EOFError:
            break

def meu_length(texto):
    tamanho = 0
    for elemento in texto:
        tamanho = tamanho + 1
    return tamanho

def texto_para_caixa_baixa(palavra):
    novo_texto = ''
    for letra in palavra:
        if eh_letra_minuscula(letra):
            novo_texto = novo_texto + letra
        else:
            novo_texto = novo_texto + chr(ord(letra) + 32)
    return novo_texto

def eh_letra_maiuscula(caracter): # 65 a 90
    if ord(caracter) >= 65 and ord(caracter) <= 90:
        return True
    return False

def eh_letra_minuscula(caracter): # 97 a 122
    if ord(caracter) >= 97 and ord(caracter) <= 122:
        return True
    return False

main()
