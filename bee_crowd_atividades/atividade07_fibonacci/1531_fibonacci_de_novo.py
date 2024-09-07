def fib(numero):
    n1, n2 = 1, 1
    N = 0
    for i in range(numero - 2):
        N = n1 + n2
        n1 = n2
        n2 = N
    if numero > 2:
        return N
    else:
        return 1

def main():
    try:
        while True:
            linha = input()
            if not linha:
                break
            numeros = linha.split()
            N = int(numeros[0])
            M = int(numeros[1])

            resto_fib = fib(fib(N)) % M
            print(resto_fib)
    except EOFError:
        pass

if __name__ == "__main__":
    main()
