def max_moedas(N, moedas):
    dp = [0] * (2 * N)
    for i in range(N - 1, -1, -1):
        dp[i] = moedas[i] + max(dp[2 * i], dp[2 * i + 1])
    return dp[1]

# Lendo a entrada
N = int(input())
moedas = list(map(int, input().split()))

# Chamando a função e imprimindo o resultado
print(max_moedas(N, moedas))


