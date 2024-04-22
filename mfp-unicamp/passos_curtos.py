import math

'''
Como uma grande entusiasta dos Jogos Olímpicos Ultrassônicos, Amy decidiu conhecer um pouco mais sobre a história deste evento. Para isso, ela resolveu visitar todos os locais que já sediaram os Jogos. No entanto, para realizar essas viagens, Amy possui apenas o carro com hélice de seu amigo Tails, que já está muito velho e limitado. Assim, Amy só consegue ir de uma sede A na posição (xa, ya) diretamente para uma sede B na posição (xb, yb) se a distância euclidiana entre elas for de no máximo D, 
pois o carro não suporta viagens ininterruptas mais longas sem apresentar falhas gravíssimas.
A distância euclidiana entre dois pontos é dada pela raiz quadrada de [(xa-xb)² + (ya-yb)²].
Como trata-se de um evento com muita tradição, inúmeros locais já foram sedes e, rapidamente, Amy se perdeu em meio a tanta informação. Então, cabe a você responder às várias perguntas de Amy. Uma pergunta de Amy tem o seguinte formato: dados duas sedes S e T, é possível ir de S a T - possivelmente, utilizando sedes intermediárias - sem que o carro falhe?

Entrada
A primeira linha da entrada contém três inteiros N, Q e D (1 ≤ N, Q ≤ 105, 0 ≤ D ≤ 3), representando o número de sedes, o número de perguntas e a distância D descrita no enunciado, respectivamente.
Cada uma das próximas N linhas contém dois inteiros x_i e y_i (-109 ≤ x_i, y_i ≤ 109), representando as coordenadas da i-ésima sede. É garantido que todas as sedes possuem coordenadas distintas.
Por fim, cada uma das últimas Q linhas contém dois inteiros S_i e T_i (1 ≤ S_i, T_i ≤ N), representando as sedes de uma pergunta.

Saída
Imprima Q linhas, de forma que a i-ésima delas representa a resposta para a i-ésima pergunta feita por Amy.
A linha deve conter o caractere 'S' caso seja possível ir da sede S_i para a T_i e 'N' caso contrário. Imprima uma quebra de linha ao final de sua resposta.
'''

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