def main():
    n = int(input())
    print(obter_termo_sequencia_fibonot(n))

def obter_termo_sequencia_fibonot(n):
    a = 1
    b = 2
    c = 3
    while n > 0:
        a = b
        b = c
        c = a + b
        n -= (c - b - 1)
    n += (c - b - 1)
    return b + n

main()