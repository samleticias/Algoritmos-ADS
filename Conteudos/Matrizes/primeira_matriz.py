def main():
    ordem = int(input("Digite a ordem da matriz quadrada: "))
    
    matriz = [[0 for _ in range(ordem)] for _ in range(ordem)]
    
    print(f"\nDigite os elementos da matriz {ordem}x{ordem} um por um:\n")
    for i in range(ordem):
        for j in range(ordem):
            elemento = int(input(f"Digite o elemento [{i+1}][{j+1}]: "))
            matriz[i][j] = elemento
    
    print("\n>>> Matriz preenchida: <<<\n")
    for linha in matriz:
        print(" ".join(f"{elem}" for elem in linha))

if __name__ == "__main__":
    main()
