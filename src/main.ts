//Erstellt ein Array von Zahlen.
const numbersArray: number[] = [1,4,2,6,5]
console.log(numbersArray)

//Nutzt die '.map'-Funktion, um alle Zahlen im Array zu verdoppeln.
const doubleNumbersArray = numbersArray.map((index) => {return index * 2})
console.log(doubleNumbersArray)


//Erstellt ein Array von Wörtern.
const wordArray: string[] = ["Deine ", "Eltern ","sind ", "auf ", "einem", "Tennisturnier"]
console.log(wordArray)

//Nutzt die '.filter'-Funktion, um nur die Wörter auszuwählen, die länger als 5 Buchstaben sind.
const longerThen5Array: string [] = wordArray.filter( word => word.length > 5)
console.log(longerThen5Array)

// Nutzt die '.reduce'-Funktion, um die Summe aller Zahlen im Array zu berechnen.
const sum = numbersArray.reduce( (x, y) => {return x + y})
console.log(sum)

//Nutzt die '.some'-Funktion, um zu überprüfen, ob mindestens eine Zahl größer als 10 ist.
const biggerThen10 = numbersArray.some(x => {return x > 10})
function isBiggerThen10(biggerThen10: boolean):string {
    if (biggerThen10) {
        return "es ist eine Zahl vorhanden, die großer als 10 ist"
    } else {
        return "keine Zahl vorhanden, die großer als 10 ist"
    }
}
console.log(isBiggerThen10(biggerThen10))

//BONUS
//Kopiere dir die Antwort der Rick&Morty Api mit den Charakteren in eine Variable.
interface Character {
    id : number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
}

const rickAndMortyCharacter: Character[] = [
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male"
    },
    {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male"
    },
    {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female"
    },
    {
        "id": 4,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female"
    },
    {
        "id": 5,
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male"
    },
    {
        "id": 6,
        "name": "Abadango Cluster Princess",
        "status": "Alive",
        "species": "Alien",
        "type": "",
        "gender": "Female"
    },
    {
        "id": 7,
        "name": "Abradolf Lincler",
        "status": "unknown",
        "species": "Human",
        "type": "Genetic experiment",
        "gender": "Male"
    },
    {
        "id": 8,
        "name": "Adjudicator Rick",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male"
    },
    {
        "id": 9,
        "name": "Agency Director",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male"
    },
    {
        "id": 10,
        "name": "Alan Rails",
        "status": "Dead",
        "species": "Human",
        "type": "Superhuman (Ghost trains summoner)",
        "gender": "Male"
    },
    {
        "id": 11,
        "name": "Albert Einstein",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male"
    },
    {
        "id": 12,
        "name": "Alexander",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male"
    },
    {
        "id": 13,
        "name": "Alien Googah",
        "status": "unknown",
        "species": "Alien",
        "type": "",
        "gender": "unknown"
    },
    {
        "id": 14,
        "name": "Alien Morty",
        "status": "unknown",
        "species": "Alien",
        "type": "",
        "gender": "Male"
    },
    {
        "id": 15,
        "name": "Alien Rick",
        "status": "unknown",
        "species": "Alien",
        "type": "",
        "gender": "Male"
    },
    {
        "id": 16,
        "name": "Amish Cyborg",
        "status": "Dead",
        "species": "Alien",
        "type": "Parasite",
        "gender": "Male"
    },
    {
        "id": 17,
        "name": "Annie",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female"
    },
    {
        "id": 18,
        "name": "Antenna Morty",
        "status": "Alive",
        "species": "Human",
        "type": "Human with antennae",
        "gender": "Male"
    },
]

//Schreibe eine Funktion die eine Liste mit Rick&Morty Charakteren entgegen nimmt
// und eine Liste mit nur den lebenden Menschen zurück gibt.

function filterLivingHumans(characters: Character[]): Character[] {
    return characters.filter(character => {
        return character.status === 'Alive';
    });
}
console.log(filterLivingHumans(rickAndMortyCharacter))
