def main():
    while True: 
        try:
            texto = input()
            sequencia_dancante = ""
            maiuscula = True
            
            for caracter in texto:
                if (eh_letra(caracter) and caracter != ' '):
                    sequencia_dancante += texto_para_caixa_alta(caracter) if maiuscula else texto_para_caixa_baixa(caracter)
                    maiuscula = not maiuscula
                else:
                    sequencia_dancante += caracter
            print(sequencia_dancante)
        except EOFError:
            break

def eh_letra_maiuscula(caracter):
    if ord(caracter) >= 65 and ord(caracter) <= 90:
        return True
    return False

def eh_letra_minuscula(caracter):
    if ord(caracter) >= 97 and ord(caracter) <= 122:
        return True
    return False

def eh_letra(caracter):
    if ord(caracter) >= 65 and ord(caracter) <= 122:
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
    
def texto_para_caixa_alta(palavra):
    novo_texto = ''
    for letra in palavra:
        if eh_letra_maiuscula(letra):
            novo_texto = novo_texto + letra
        else:
            novo_texto = novo_texto + chr(ord(letra) - 32)
    return novo_texto

main()