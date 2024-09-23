def main():
    n = int(input());
    vetor = list(map(int, input().split()));
    print("Menor valor: ", min(vetor));
    print("Posicao: ", vetor.index(min(vetor)))

main()