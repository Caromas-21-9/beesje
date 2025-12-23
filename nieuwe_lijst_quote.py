import os
import json

#functie om elementen in een map te doorlopen
def overloop():
    
    with open("motivatie.txt", "r") as invoer:
        lijnen=invoer.readlines();
    
    with open("data/motivatie.json", "w") as uitvoer:
        lijst=[]
        for lijn in lijnen:
            lijst.append(lijn.strip());
            print(lijn.strip());
        print(lijst)
        print(json.dumps(lijst), file=uitvoer);



overloop();