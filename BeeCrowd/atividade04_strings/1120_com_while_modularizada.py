def main():
    while True:
        valor_para_remover, numeros = input().split()
        if valor_para_remover == '0' and numeros == '0':
            break
        numeros = '0' + numeros
        val = int(meu_replace(numeros, valor_para_remover, ''))
        print(val)

def meu_replace(texto, valor_para_remover, substituto):
    novo_texto = ''
    for i in range(meu_length(texto)):
        if texto[i] != valor_para_remover:
            novo_texto += texto[i]
        else:
            novo_texto += substituto
        
    return novo_texto

def meu_length(texto):
    tamanho = 0
    for caracter in texto:
        tamanho = tamanho + 1
    return tamanho

main()