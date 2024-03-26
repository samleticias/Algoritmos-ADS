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
