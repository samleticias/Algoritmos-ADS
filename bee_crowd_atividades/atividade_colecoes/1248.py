def main():
    casos_teste = int(input())
    contador = 0

    while contador < casos_teste:
        dieta = input()
        cafe = input()
        almoco = input()
        contador = contador + 1
        almoco += cafe
        for letra in range(len(almoco)):
            if almoco[letra] not in dieta:
                dieta = 'CHEATER'
                break
            else:
                dieta = dieta.replace(almoco[letra], '')

        if dieta != 'CHEATER':
            dieta = ''.join(sorted(dieta))
        print(dieta)

main()