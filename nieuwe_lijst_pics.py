import os
import json

#functie om elementen in een map te doorlopen
def overloop():
    #locatie van map vastleggen (is relatieve pad)
    mapje="afbeeldingen/"
    #overlopen van elementen in een map
    with open("data/afbeeldingen.json", "w") as uitvoer:
        lijst=[]
        for filename in os.listdir(mapje):
            lijst.append(filename.strip().rstrip(".jpg"));
            print(filename);
        print(lijst)
        print(json.dumps(lijst), file=uitvoer);



overloop();