def main():
    # Entrada
    numCompetidores, numPizzas = list(map(int, input().split()))
    
    # Obter forças
    forcas = list(map(int, input().split()))

    # Processamento
    t = 0
    pizzasEntregues = 0
    pizzasRestantes = numPizzas

    # Entregar pizzas para os competidores
    statusPizza = []
    for i in range(numCompetidores):
        statusPizza.append(False) 

    while pizzasEntregues < numPizzas:
        t += 1
        # print(f"T {t}.")
        for i in range(numCompetidores):
            if t % forcas[i] == 0:
                # Completou uma volta.
                pizzasEntregues += 1
                # print(f"Competidor {i} entregou uma pizza ({pizzasEntregues}).")
        

    print(t)

main()