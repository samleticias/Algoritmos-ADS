senha = 2002

while True:
    teste = int(input())
    if teste == senha:
        print("Acesso Permitido")
        break
    else:
        print("Senha Invalida")