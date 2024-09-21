def calcular_area_quadrado(coordenadas):
    # Na cidade de Amy, Sonic e seus amigos participam de uma corrida de obstáculos para se prepararem para as Olimpíadas. Quatro cogumelos são posicionados estrategicamente nos cantos da praça principal, a qual tem a forma de um quadrado quando vista em um mapa. Cada cogumelo está situado em um vértice do quadrado que representa a praça.
    # Amy está ansiosa para calcular a área total ocupada pela praça principal de sua amada cidade. Você pode ajudá-la?
    #Entrada
    #A entrada consiste de quatro linhas. Cada linha contém dois inteiros (x,y) as coordenadas dos cogumelos (-1000 ≤ x, y ≤ 1000).
    #É garantido que a área da praça é positiva e que os lados do quadrado são paralelos aos eixos do plano cartesiano. As coordenadas dos cogumelos são dadas em ordem aleatória.
    
    #Saída
    #Imprima um único inteiro, representando a área da praça principal.
    #Adicione uma quebra de linha ao final de sua resposta.
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
