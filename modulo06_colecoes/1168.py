def main():
    # 0 é formado por 6 leds, 1 é formado por 2 leds
    # os numeros da tabela representam a quantidade de lets nas posições de 0 a 9
    leds = (6,2,5,5,4,5,6,3,7,6)
    qtd_casos = int(input())

    for caso in range(qtd_casos):
        total = 0
        valor = input()
        for v in valor:
            total += leds[int(v)]
        print("%d leds" %int(total))

main()