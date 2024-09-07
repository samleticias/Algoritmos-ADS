import math

def main():
    numero = int(input()) 
    valor_fibonacci = obter_valor_fibonacci(numero) 
    print(f'{valor_fibonacci:.1f}')  

def obter_valor_fibonacci(N):
    sqrt5 = math.sqrt(5)
    valor_fibonacci = (math.pow((1 + sqrt5) / 2, N) - math.pow((1 - sqrt5) / 2, N)) / sqrt5
    return valor_fibonacci

main()
