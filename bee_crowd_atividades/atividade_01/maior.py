def encontrar_maior(x, y):
    return (x + y + abs(x - y)) // 2

def main():
    a, b, c = map(int, input().split())
    maior_ab = encontrar_maior(a, b)

    maior = encontrar_maior(maior_ab, c)

    print(f"{maior} eh o maior")

main()
