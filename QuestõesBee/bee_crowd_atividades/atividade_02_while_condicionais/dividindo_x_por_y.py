N = int(input())

contador = 0
while contador < N:
    valor1, valor2 = map(float, input().split())
    if valor2 == 0:
        print("divisao impossivel")
    else:
        divisao = valor1 / valor2
        print(f"{divisao:.1f}")
    contador += 1
