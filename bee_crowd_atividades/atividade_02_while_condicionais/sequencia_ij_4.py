i = 0
while i <= 2:
    j = 1
    while j <= 3:
        if i.is_integer():
            print(f"I={int(i)} J={int(j)}")
        else:
            print(f"I={i:.1f} J={j:.1f}")
        j += 1
    i += 0.2
    if i.is_integer():
        i -= 2
