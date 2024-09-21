def main():
    contador_pontos_time_1 = 0
    contador_pontos_time_2 = 0

    n = int(input())

    for _ in range(n):
        entrada = input().split()
        t = int(entrada[1])
        k = int(entrada[2])

        if t == 1:
            contador_pontos_time_1 += k
        else:
            contador_pontos_time_2 += k
    
    print(f"{contador_pontos_time_1} x {contador_pontos_time_2}")

if __name__ == "__main__":
    main()
