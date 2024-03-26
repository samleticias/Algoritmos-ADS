while True:
    nota1 = None
    nota2 = None

    while nota1 is None:
        nota = float(input())
        if 0 <= nota <= 10:
            nota1 = nota
        else:
            print("nota invalida")

    while nota2 is None:
        nota = float(input())
        if 0 <= nota <= 10:
            nota2 = nota
        else:
            print("nota invalida")

    media = (nota1 + nota2) / 2
    print(f"media = {media:.2f}")

    while True:
        print("novo calculo (1-sim 2-nao)")
        opcao = int(input())
        if opcao == 1 or opcao == 2:
            break
    if opcao == 2:
        break
