const numbersArray: number[] = [1,4,2,6,5]
console.log(numbersArray)

const doubleNumbersArray = numbersArray.map((index) => {return index * 2})
console.log(doubleNumbersArray)


//Schritt 2: Erstellt ein Array von Wörtern.
const wordArray: string[] = ["Deine ", "Eltern ","sind ", "auf ", "einem", "Tennisturnier"]
console.log(wordArray)

//Nutzt die '.filter'-Funktion, um nur die Wörter auszuwählen, die länger als 5 Buchstaben sind.
const longerThen5Array: string [] = wordArray.filter( word => word.length > 5)
console.log(longerThen5Array)