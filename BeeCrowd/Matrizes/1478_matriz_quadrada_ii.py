def main():
    ordem = int(input().strip())
    
    while ordem != 0:
        matriz = [[0 for _ in range(ordem)] for _ in range(ordem)]
        
        for i in range(ordem):
            for j in range(ordem):
                matriz[i][j] = abs(i - j) + 1
        
        for linha in matriz:
            print(" ".join(f"{elem:>3}" for elem in linha))
        print("")
        
        ordem = int(input().strip())

if __name__ == "__main__":
    main()
