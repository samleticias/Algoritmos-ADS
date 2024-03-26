def calcular_media_ponderada(nota1, nota2):
    peso_nota1 = 3.5
    peso_nota2 = 7.5

    media = (nota1 * peso_nota1 + nota2 * peso_nota2) / (peso_nota1 + peso_nota2)
    return media

def main():
    A = float(input())
    B = float(input())
    resultado_media = calcular_media_ponderada(A, B)
    print(f'MEDIA = {resultado_media:.5f}')

main()