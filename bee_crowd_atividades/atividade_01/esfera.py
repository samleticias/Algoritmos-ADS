def calcular_volume_esfera(raio):
    return (4.0/3) * 3.14159 * (raio ** 3)

def main():
    raio = float(input())

    volume = calcular_volume_esfera(raio)

    print(f'VOLUME = {volume:.3f}')

main()
