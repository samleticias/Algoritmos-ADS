def main():
    while True:
        try:
            tag = texto_para_caixa_baixa(input())
            numero = input()
            string_tag = input()
            palavras = string_tag.replace('<', '.<').replace('>', '>.').split('.')
            texto_novo = ""
            texto_final = ""

            for palavra in palavras:
                nova_palavra = palavra
                if nova_palavra != '':
                    if nova_palavra[0] == '<':
                        texto_novo += texto_para_caixa_baixa(nova_palavra).replace(tag, numero)
                    else:
                        texto_novo += nova_palavra

            texto_anterior = string_tag.split(' ')
            texto_atual = texto_novo.split(' ')
            
            for n_index in range(meu_length(texto_atual)):
                if texto_para_caixa_baixa(texto_anterior[n_index]) == texto_atual[n_index]:
                    texto_final += texto_anterior[n_index] + ' '
                else:
                    texto_final += texto_atual[n_index] + ' '
            
            print(texto_final.strip())
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

main()
