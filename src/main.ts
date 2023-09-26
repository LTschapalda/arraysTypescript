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