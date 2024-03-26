X = int(input())
Y = int(input())

def soma_impares(X, Y):
    menor = min(X, Y)
    maior = max(X, Y)

    soma = 0

    for i in range(menor + 1, maior):
        if i % 2 != 0:
            soma += i

    return soma

resultado = soma_impares(X, Y)

print(resultado)