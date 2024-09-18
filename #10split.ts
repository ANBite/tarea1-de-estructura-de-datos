//Allan Francisco Moisés Chaclán Guinea - 1502023
let phrase : string = "Desarrolle un programa en typescript que ejemplifique un ejemplo del uso de un split";

let phrasesplit : string[] = phrase.split(" ");

let co : number = 1
for (const value of phrasesplit) {
    console.log(`Palabra #${co}: ${value}`)
    co ++
}
console.log("\n----------------/ Fin de la tarea /-------------------")