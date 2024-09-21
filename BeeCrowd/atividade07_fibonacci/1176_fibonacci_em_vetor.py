def main():
    qtd_casos_teste = int(input())
    contador = 0

    while contador < qtd_casos_teste:
        posicao_fibonacci = int(input())
        sequencia_fibonacci = obter_sequencia_fibonacci_de(posicao_fibonacci + 1)
        print(f'Fib({posicao_fibonacci}) = {sequencia_fibonacci[posicao_fibonacci]}')

        contador += 1

def obter_sequencia_fibonacci_de(N):
    sequencia_fibonacci = [0, 1]
    iteracao = 2
    while iteracao < N:
        proximo_termo = sequencia_fibonacci[iteracao - 1] + sequencia_fibonacci[iteracao - 2]
        sequencia_fibonacci.append(proximo_termo)
        iteracao = iteracao + 1
    return sequencia_fibonacci

main()