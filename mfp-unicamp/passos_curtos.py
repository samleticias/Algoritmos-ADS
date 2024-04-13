import math

def distancia(x1, y1, x2, y2):
    return math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)

def resposta_perguntas(N, Q, D, sedes, perguntas):
    respostas = []
    for S, T in perguntas:
        distancia_entre_sedes = distancia(*sedes[S - 1], *sedes[T - 1])
        if distancia_entre_sedes <= D:
            respostas.append('S')
        else:
            respostas.append('N')
    return respostas

def main():
    N, Q, D = map(int, input().split())
    sedes = [tuple(map(int, input().split())) for _ in range(N)]
    perguntas = [tuple(map(int, input().split())) for _ in range(Q)]
    respostas = resposta_perguntas(N, Q, D, sedes, perguntas)
    for resposta in respostas:
        print(resposta)

if __name__ == "__main__":
    main()