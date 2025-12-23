import os
import json

#functie om elementen in een map te doorlopen
def overloop():
    #locatie van map vastleggen (is relatieve pad)
    mapje="muziek_wav/"
    #overlopen van elementen in een map
    with open("data/muziek.json", "w") as uitvoer:
        lijst=[]
        for filename in os.listdir(mapje):
            lijst.append(filename.strip().rstrip(".wav"));
            print(filename);
        print(lijst)
        print(json.dumps(lijst), file=uitvoer);



overloop();