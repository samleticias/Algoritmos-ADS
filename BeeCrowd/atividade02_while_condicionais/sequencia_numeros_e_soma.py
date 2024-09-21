while True:
    M, N = map(int, input().split())

    if M <= 0 or N <= 0:
        break

    menor = min(M, N)
    maior = max(M, N)

    soma = sum(range(menor, maior + 1))

    sequencia = ' '.join(str(num) for num in range(menor, maior + 1))

    print(sequencia + f" Sum={soma}")
