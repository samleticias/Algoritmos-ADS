nota1 = float(input())
nota2 = float(input())

while nota1 > 0 and nota2 > 0:
    if nota1 <= 10 and nota2 <= 10:
        media = (nota1 + nota2) / 2
    else:
        print("nota invalida")
        nota1 = float(input())
        nota2 = float(input())

print("media = {:.2f} ".format(media))

