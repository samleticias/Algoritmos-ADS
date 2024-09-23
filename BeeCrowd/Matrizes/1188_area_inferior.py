def main():
    matriz = [[0.0 for _ in range(12)] for _ in range(12)]
    operacao = input().strip()
    soma_total = 0.0
    quantidade_elementos = 0
    limite_superior = 11
    limite_inferior = 1
    
    for linha in range(12):
        for coluna in range(12):
            matriz[linha][coluna] = float(input())
    
    for linha in range(11, 6, -1):
        for coluna in range(limite_inferior, limite_superior):
            soma_total += matriz[linha][coluna]
            quantidade_elementos += 1
        limite_superior -= 1
        limite_inferior += 1
    
    if operacao == 'S':
        print(f"{soma_total:.1f}")
    else:
        print(f"{soma_total / quantidade_elementos:.1f}")

if __name__ == "__main__":
    main()
