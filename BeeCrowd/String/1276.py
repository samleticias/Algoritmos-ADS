def main():
    while True:
        try:
            linha = input()
        except EOFError:
            break

        if not linha:
            print()
        else:
            caracteres_unicos = []
            for caractere in linha:
                if caractere != ' ' and caractere not in caracteres_unicos:
                    caracteres_unicos.append(caractere)

            caracteres_ordenados = sorted(caracteres_unicos)
            primeira = caracteres_ordenados[0]
            ultima = caracteres_ordenados[0]
            valor_ascii = ord(primeira)
            intervalo = False

            for i in range(1, len(caracteres_ordenados)):
                valor_ascii += 1
                if valor_ascii == ord(caracteres_ordenados[i]):
                    ultima = caracteres_ordenados[i]
                else:
                    if intervalo:
                        print(" ", end="")
                    print(f"{primeira}:{ultima},", end="")
                    primeira = caracteres_ordenados[i]
                    ultima = caracteres_ordenados[i]
                    valor_ascii = ord(caracteres_ordenados[i])
                    intervalo = True

            if intervalo:
                print(" ", end="")
            print(f"{primeira}:{ultima}")

if __name__ == "__main__":
    main()
