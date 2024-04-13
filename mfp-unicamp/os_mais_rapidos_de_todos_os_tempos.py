def main():
    # Na primeira linha, são dados 2 números N e p, 
    # sendo o número de competidores e a quantidade de pizzas que a equipe tem que entregar.
    N, p = map(int, input().split())

    # Na próxima linha temos N números A1, A2,..., AN, sendo o 
    # tempo necessário para cada competidor carregar uma pizza e retornar ao início.
    tempos = list(map(int, input().split()))

    while len(tempos) < N:
        tempos.append(p)

    tempos.sort()

    # tempo mínimo para a equipe concluir a tarefa é a soma dos dois menores tempos
    tempo_minimo = tempos[0] + tempos[1]

    print(tempo_minimo)
    print()

if __name__ == "__main__":
    main()
