def main():
    numero = int(input())
    sequencia_fibonacci = obter_sequencia_fibonacci_de(numero)
    print(para_str(sequencia_fibonacci))

def obter_sequencia_fibonacci_de(N):
    sequencia_fibonacci = [0, 1]
    iteracao = 2
    while iteracao < N:
        proximo_termo = sequencia_fibonacci[iteracao - 1] + sequencia_fibonacci[iteracao - 2]
        sequencia_fibonacci.append(proximo_termo)
        iteracao = iteracao + 1
    return sequencia_fibonacci

def para_str(lista):
    texto = ''
    for i in range(len(lista)):
        texto += str(lista[i])
        if i < len(lista) - 1:
            texto += ' '  
    return texto

main()