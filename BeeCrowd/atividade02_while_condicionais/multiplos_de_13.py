X = int(input())
Y = int(input())

soma = 0
for num in range(min(X, Y), max(X, Y) + 1):
    if num % 13 != 0:
        soma += num

print(soma)
