def calcular_triangulo(A, C):
    return (A * C) / 2

def calcular_circulo(C):
    return 3.14159 * C * C

def calcular_trapezio(A, B, C):
    return ((A + B) * C) / 2

def calcular_quadrado(B):
    return B * B

def calcular_retangulo(A, B):
    return A * B

def main():
    A = float(input())
    B = float(input())
    C = float(input())

    area_triangulo = calcular_triangulo(A, C)
    area_circulo = calcular_circulo(C)
    area_trapezio = calcular_trapezio(A, B, C)
    area_quadrado = calcular_quadrado(B)
    area_retangulo = calcular_retangulo(A, B)

    print(f'TRIANGULO:{area_triangulo:.3f}')
    print(f'CIRCULO: {area_circulo:.3f}')
    print(f'TRAPEZIO: {area_trapezio:.3f}')
    print(f'QUADRADO: {area_quadrado:.3f}')
    print(f'RETANGULO: {area_retangulo:.3f}')

main()
