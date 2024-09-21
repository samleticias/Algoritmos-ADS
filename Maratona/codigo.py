def main():
    entrada = input().split()

    bits = [int(bit) for bit in entrada]

    num_ones = sum(bits[:-1])
    
    if num_ones % 2 != bits[-1]:
        print("S")
    else:
        print("N?")

main()