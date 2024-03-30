N = int(input())
quantidade_numeros_lidos = 0

while quantidade_numeros_lidos < N:
    numero = int(input())

    if numero % 2 == 0 and numero > 0:
        print("EVEN POSITIVE")
    elif numero % 2 == 0 and numero < 0:
        print("EVEN NEGATIVE")
    elif numero % 2 != 0 and numero > 0:
        print("ODD POSITIVE")
    elif numero % 2 != 0 and numero < 0:
        print("ODD NEGATIVE")
    else:
        print("NULL")

    quantidade_numeros_lidos += 1