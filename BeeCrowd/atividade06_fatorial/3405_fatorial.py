def main():
    n = int(input())
    zeros = 0
    while n > 0:
        n = n // 5
        zeros = zeros + n
    print(zeros)
    
main()