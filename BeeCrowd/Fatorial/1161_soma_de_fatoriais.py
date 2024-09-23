def main():
    while True:
        try:
            valores = meu_split(input(), ' ')
            valores = mapear(valores, int)
            fatorial_M = obter_fatorial_de(valores[0])
            fatorial_N = obter_fatorial_de(valores[1])
            soma_fatoriais = fatorial_M + fatorial_N
            print(soma_fatoriais)
        except EOFError:
            break

def obter_fatorial_de(N):
    fatorial = 1
    for i in range(1, N + 1):
        fatorial *= i
    return fatorial

def meu_split(texto, splitador):
    lista = []
    inicio = 0

    for i in range(len(texto)):
        if texto[i] == splitador:
            if i > inicio:
                lista.append(texto[inicio:i])  
            inicio = i + 1
    if inicio < len(texto):
        lista.append(texto[inicio:])  
    return lista

def mapear(colecao, funcao_transformadora):
    for i in range(len(colecao)):
        colecao[i] = funcao_transformadora(colecao[i])
    return colecao

main()