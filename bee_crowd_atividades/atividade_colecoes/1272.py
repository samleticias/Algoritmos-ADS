def main():
    quantidade_casos_teste = int(input())
    contador = 0

    while contador < quantidade_casos_teste:
        mensagem_oculta = input()
        mensagem_splitada = mensagem_oculta.split('·')
        mensagem_desvendada = ''

        for palavra in mensagem_splitada:
            if palavra:  
                mensagem_desvendada += palavra[0]

        if meu_length(mensagem_splitada) == 1 and meu_length(mensagem_splitada[0]) == 1:
            mensagem_desvendada = mensagem_splitada[0]  

        print(mensagem_desvendada)
        contador += 1

def meu_length(texto):
    tamanho = 0
    for caracter in texto:
        tamanho += 1
    return tamanho

main()