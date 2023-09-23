

for num in range(1, 101):
    output = ""
    if num % 3 == 0:
        output += "Hello"
    if num % 5 == 0:
        output += "World"
    if num % 7 == 0:
        output += "Yoo"
    print(output if output else num)