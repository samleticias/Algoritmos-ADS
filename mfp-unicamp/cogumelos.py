def calcular_area_quadrado(coordenadas):
    min_x = min(coordenadas[0][0], coordenadas[1][0], coordenadas[2][0], coordenadas[3][0])
    max_x = max(coordenadas[0][0], coordenadas[1][0], coordenadas[2][0], coordenadas[3][0])
    min_y = min(coordenadas[0][1], coordenadas[1][1], coordenadas[2][1], coordenadas[3][1])
    max_y = max(coordenadas[0][1], coordenadas[1][1], coordenadas[2][1], coordenadas[3][1])
    largura = max_x - min_x
    altura = max_y - min_y
    area = largura * altura
    return area

def main():
    coordenadas = [tuple(map(int, input().split())) for _ in range(4)]
    print(calcular_area_quadrado(coordenadas))

if __name__ == "__main__":
    main()
