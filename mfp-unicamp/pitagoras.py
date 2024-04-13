def calcular_tripla_pitagorica(m, n):
    a = m**2 - n**2
    b = 2 * m * n
    c = m**2 + n**2
    return a, b, c

def main():
    m, n = map(int, input().split())
    a, b, c = calcular_tripla_pitagorica(m, n)
    print(a, b, c)

if __name__ == "__main__":
    main()



