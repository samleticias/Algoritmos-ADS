N = int(input())

contador = 0
while contador < N:
    valor1, valor2, valor3 = map(float, input().split())
    media_ponderada = (valor1 * 2 + valor2 * 3 + valor3 * 5) / 10
    print(f"{media_ponderada:.1f}")
    contador += 1