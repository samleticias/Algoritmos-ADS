def calcular_media_ponderada(nota1, nota2, nota3):
    peso_nota1 = 2.0
    peso_nota2 = 3.0
    peso_nota3 = 5.0

    media = (nota1 * peso_nota1 + nota2 * peso_nota2 + nota3 * peso_nota3 ) / (peso_nota1 + peso_nota2 + peso_nota3)
    return media

def main():
    A = float(input())
    B = float(input())
    C = float(input())
    resultado_media = calcular_media_ponderada(A, B, C)
    print(f'MEDIA = {resultado_media:.5f}')

main()