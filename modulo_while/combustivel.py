def main():
    soma_alcool = 0
    soma_gasolina = 0
    soma_diesel = 0
    
    while True:
        codigo_combustivel = int(input())
        if codigo_combustivel == 1:
            soma_alcool += 1
        elif codigo_combustivel == 2:
            soma_gasolina += 1
        elif codigo_combustivel == 3:
            soma_diesel += 1
        elif codigo_combustivel == 4:
            print("MUITO OBRIGADO")
            print("Alcool:", soma_alcool)
            print("Gasolina:", soma_gasolina)
            print("Diesel:", soma_diesel)
            break 

main()
