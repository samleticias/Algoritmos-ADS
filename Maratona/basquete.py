def main():
    contador = 0
    contador_pontos_time_1 = 0
    contador_pontos_time_2 = 0
    # A primeira linha de entrada contém um inteiro n (1 ≤ n ≤ 100).
    # Daí segue n linhas, cada uma no formato "Time t +k" (sem as aspas), 
    # que indica que o Time t fez uma cesta de k pontos (t em {1, 2}, k em {1, 2, 3}).
    N = int(input())

    while contador < N:
        t, k = map(int, input().split())
        print(f"Time {t} +{k}")

        if t == 1:
            contador_pontos_time_1 += k
        else:
            contador_pontos_time_2 += k
        contador += 1
    
    # Imprima uma linha no formato "p1 x p2" (sem as aspas), 
    # em que p1 representa a pontuação do Time 1 e p2 representa a pontuação do Time 2. Note que há um espaço antes e um espaço depois do x.
    # Adicione uma quebra de linha ao final de sua resposta.
    p1 = contador_pontos_time_1
    p2 = contador_pontos_time_2
    print(">>> PLACAR <<<")
    print(f"{p1} x {p2}")
    print()

if __name__ == "__main__":
    main()
