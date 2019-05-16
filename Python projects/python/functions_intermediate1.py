def randInt():
    num = random.random() * 100
    return num

def randInt(max):
    num = random.random() * max
    return num

def randInt(min):
    num = random.random(min, 100)
    return num

def randInt(min, max):
    num = random.random(min, max)
    return num

#print(randInt())
#print(randInt(max=50))
#print(randInt(min=50))
#print(randInt(min=50, max=500))
