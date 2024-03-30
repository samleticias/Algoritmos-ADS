def calcular_litros(tempo, velocidade_media):
    taxa_consumo = 12
    distancia = calcular_distancia(tempo, velocidade_media)
    litros_necessarios = calcular_litros_necessarios(distancia, taxa_consumo)
    return litros_necessarios

def calcular_distancia(tempo, velocidade_media):
    return tempo * velocidade_media

def calcular_litros_necessarios(distancia, taxa_consumo):
    return distancia / taxa_consumo

def main():
    tempo = int(input())
    velocidade_media = int(input())

    litros_necessarios = calcular_litros(tempo, velocidade_media)

    print(f'{litros_necessarios:.3f}')
5
main()
