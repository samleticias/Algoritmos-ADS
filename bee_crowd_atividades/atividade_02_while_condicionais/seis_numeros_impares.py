X = int(input())

contagem = 0

i = X

while contagem < 6:
    if i % 2 != 0:
        print(i)
        contagem += 1
    i += 1
