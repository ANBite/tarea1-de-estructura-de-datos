//Allan Francisco Moisés Chaclán Guinea - 1502023

let listnumeric : number[] = [1, 4, 7, 10, 13, 15, 19]

console.log("Recorrido de toda la lista:\n")
for (const i of listnumeric) {
    console.log(i)
}

console.log("\nSumando todos sus elementos:")
let a : number = 0
for (const i of listnumeric) {
    a = a + i
}
console.log(a)