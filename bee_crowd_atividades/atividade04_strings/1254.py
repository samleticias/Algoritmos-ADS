def substitui_tag(tag, numero, string):
    i = 0
    tamanho_tag = meu_length(tag)
    resultado = []

    while i < meu_length(string):
        if string[i] != '<':
            meu_append(resultado, string[i])
            i += 1
        else:
            if texto_para_caixa_baixa(string[i + 1:i + 1 + tamanho_tag]) == texto_para_caixa_baixa(tag):
                meu_append(resultado, to_string(numero))
                i += tamanho_tag + 1
            else:
                meu_append(resultado, string[i])
                i += 1

    print(''.join(resultado))

def main():
    while True:
        try:
            tag = input()
            numero = int(input())
            string = input()
            substitui_tag(tag, numero, string)
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

def meu_length(texto):
    tamanho = 0
    for caracter in texto:
        tamanho = tamanho + 1
    return tamanho

def to_string(mensagem):
    return str(mensagem)

def meu_append(lista, elemento):
    lista.append(elemento)
    return lista

if __name__ == "__main__":
    main()