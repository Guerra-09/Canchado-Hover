

def wordCounter(frase):

    counter = 1
    
    for i in frase:
        if i == ' ':
            counter +=1
        else:
            pass


    return ('Hay: ',counter, 'palabras')

frase = str(input("Frase: "))
print(wordCounter(frase))

