def main():
    # A entrada é um número N (1 ≤ N ≤ 15) a soma dos pontos retornados por Sonic.
    # Vitória na programação (afinal isso é um esporte olímpico) - 8 pontos
    # Vitória no vôlei (afinal esse é o esporte mais legal) - 4 pontos
    # Vitória no futebol (afinal este é o país do futebol) - 2 pontos
    # Vitória na corrida (afinal temos o Sonic) - 1 ponto

    N = int(input())

    if N >= 1 and N <= 15: # printando quantidade de esportes com vitória
        if N == 1: 
            print(1)
        elif N == 2:
            print(1)
        elif N == 3:
            print(2)
        elif N == 4:
            print(1)
        elif N == 5:
            print(2)
        elif N == 6:
            print(2)
        elif N == 7:
            print(3)
        elif N == 8:
            print(1)
        elif N == 9:
            print(2)
        elif N == 10:
            print(2)
        elif N == 11:
            print(3)
        elif N == 12:
            print(2)
        elif N == 13:
            print(3)
        elif N == 14:
            print(3)
        else:
            print(4)
    else: 
        print("Valor inválido!")

main()