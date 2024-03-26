import math

def calcular_area_circulo(raio):
    area = math.pi * raio ** 2
    return area

raio = float(input("Digite o valor do raio: 5"))

area_calculada = calcular_area_circulo(raio)

print(f'A={area_calculada:.4f}')
