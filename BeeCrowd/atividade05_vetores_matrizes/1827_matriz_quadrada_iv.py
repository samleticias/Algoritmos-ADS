def main():
    while True:
        try:
            n = int(input())
            inicio_bloco_central = int(n/3)
            fim_bloco_central = n - inicio_bloco_central
            
            # preenche com 0
            matriz = [[0 for i in range(n)] for j in range(n)]
            
            # preenche com 2
            for i in range(n):
                matriz[i][i] = 2
                
            # preenche com 3
            j = 0
            for i in range(n-1, -1, -1):
                matriz[j][i] = 3
                j += 1
                
            # preenche meio com 1
            for i in range(inicio_bloco_central, fim_bloco_central):
                for j in range(inicio_bloco_central, fim_bloco_central):
                    matriz[i][j] = 1
            
            matriz[int(n/2)][int(n/2)] = 4
            
            for i in range(n):
                for j in range(n):
                    print(matriz[j][i], end='')
                print()
            print()
        
        except EOFError:
            break

main()
