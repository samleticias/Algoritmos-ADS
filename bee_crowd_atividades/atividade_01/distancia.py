def calcular_tempo(distancia, ritmo_distanciamento):
    return int(distancia / ritmo_distanciamento)

def main():
    distancia = int(input())

    ritmo_distanciamento = 1 / 2

    tempo_necessario = calcular_tempo(distancia, ritmo_distanciamento)

    print(f'{tempo_necessario} minutos')

main()
