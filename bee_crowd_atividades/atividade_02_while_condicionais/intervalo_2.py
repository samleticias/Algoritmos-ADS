def dentro_do_intervalo(x):
    return 10 <= x <= 20

n = int(input())

dentro_intervalo = 0
fora_intervalo = 0
i = 0

while i < n:
    x = int(input()) 
    
    if dentro_do_intervalo(x):
        dentro_intervalo += 1
    else:
        fora_intervalo += 1
    
    i += 1

print(f"{dentro_intervalo} in")
print(f"{fora_intervalo} out")



