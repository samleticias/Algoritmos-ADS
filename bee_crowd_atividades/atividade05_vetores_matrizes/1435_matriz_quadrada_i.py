def main():
    ordem = int(input())
    
    while ordem != 0:

        matriz = [[1] * ordem for _ in range(ordem)]
        
        for i in range(ordem):
            for j in range(ordem):
                matriz[i][j] = min(i, j, ordem - 1 - i, ordem - 1 - j) + 1

        for linha in matriz:
            print(" ".join(f"{elem:>3}" for elem in linha))
        print("") 

        ordem = int(input())

main()
