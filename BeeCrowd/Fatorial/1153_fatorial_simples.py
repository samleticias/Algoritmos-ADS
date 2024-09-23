def main():
    numero = int(input())
    fatorial = obter_fatorial_de(numero)
    print(fatorial)

def obter_fatorial_de(N):
    fatorial = 1
    for i in range(1, N + 1):
        fatorial *= i
    return fatorial

main()