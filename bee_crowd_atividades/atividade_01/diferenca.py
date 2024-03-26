def calcular_diferenca(A, B, C, D):
    diferenca = (A * B) - (C * D)
    return diferenca

def main():
    A = int(input())
    B = int(input())
    C = int(input())
    D = int(input())
    resultado_diferenca = calcular_diferenca(A, B, C, D)
    print(f'DIFERENCA = {resultado_diferenca}')

main()
