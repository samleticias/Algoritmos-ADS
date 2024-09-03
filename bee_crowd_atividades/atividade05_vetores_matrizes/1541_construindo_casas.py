import math

def main():
    valores = input().split()
    while valores[0] != "0":
        A, B, C = map(int, valores)
        area = obter_area(A, B)
        lado = obter_medida_lado_quadrado(area, C)
        print(int(lado))
        valores = input().split()

    # 8 10 20
    # 20
    # 8 x 10 = 80, só é permitido construir 20% de 80 = 16 
    # retorna 20 pq o lado do quadrado do terreno deve medir no minimo 20m X 20m = 400m2
    # para que 20% de 400 seja 80

def obter_area(comprimento, largura):
    return comprimento * largura

def obter_medida_lado_quadrado(area, valor_percentual):
    metros_minimos_terreno = area * math.floor(100/valor_percentual)
    lado = math.sqrt(metros_minimos_terreno)
    return lado

main()