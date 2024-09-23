def main():
    numero = int(input())
    fatorial = obter_fatorial_de(numero)
    digitos = [int(digito) for digito in str(fatorial)]
    print(f'Instancia {digitos[0]}')

    if digitos[len(digitos) - 1] == 0:
        print(digitos[len(digitos) - 2])
    else:
        print(digitos[len(digitos) - 1])

def obter_fatorial_de(N):
    fatorial = 1
    for i in range(1, N + 1):
        fatorial *= i
    return fatorial

main()