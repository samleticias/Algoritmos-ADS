def main():
    x1,y1,x2,y2 = map(int, input().split(' '))
    while x1 != 0 and x2 != 0 and y1 != 0 and y2 != 0: 
        print(obter_quantidade_movimentos(x1,x2,y1,y2))
        x1,y1,x2,y2 = map(int, input().split(' '))

def obter_quantidade_movimentos(x1,x2,y1,y2):
    if ([x1,y1]== [x2,y2]):
        return 0
    
    elif (eh_horizontal(x1,x2) or eh_vertical(y1,y2) or eh_diagonal(x1,x2,y1,y2)):
        return 1

    return 2

def eh_diagonal(x1,x2,y1,y2):
    return abs(x1 - x2) == abs(y1 -y2)

def eh_horizontal(x1,x2):
    return x1 == x2

def eh_vertical(y1,y2):
    return y1 == y2

main()
