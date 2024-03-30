# Escreva um programa que leia 2 valores X e Y e que imprima todos os valores entre eles 
# cujo resto da divisão dele por 5 for igual a 2 ou igual a 3.
x = int(input())
y = int(input())

menor = min(x, y)
maior = max(x, y)

num = menor + 1

while num < maior:
    if num % 5 == 2 or num % 5 == 3:
        print(num)
    num += 1

