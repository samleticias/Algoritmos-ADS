def main():
    qtd_casos_teste = int(input())
    contador = 0

    while (contador < qtd_casos_teste):
        caso = int(input())
        caso_para_string = my_to_string(caso)
        qtd_leds = 0
        contador = contador + 1

        for caractere in caso_para_string:
            if caractere == '1':
                qtd_leds = qtd_leds + 2
            elif caractere == '2':
                qtd_leds = qtd_leds + 5
            elif caractere == '3':
                qtd_leds = qtd_leds + 5
            elif caractere == '4':
                qtd_leds = qtd_leds + 4
            elif caractere == '5':
                qtd_leds = qtd_leds + 5
            elif caractere == '6':
                qtd_leds = qtd_leds + 6
            elif caractere == '7':
                qtd_leds = qtd_leds + 3
            elif caractere == '8':
                qtd_leds = qtd_leds + 7
            elif caractere == '9':
                qtd_leds = qtd_leds + 6
            elif caractere == '0':
                qtd_leds = qtd_leds + 6
                
        mostra_texto(f'{qtd_leds} leds\n')

def my_to_string(numero):
    return str(numero)

def mostra_texto(mensagem):
    print(mensagem)

main()