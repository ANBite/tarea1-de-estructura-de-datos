//Allan Francisco Moisés Chaclán Guinea - 1502023

function plus(value1: number, value2: number): void {
    console.log(`la suma de ${value1} + ${value2} es: ${value1 + value2}`);
}

function writing(): string {
    let write : string = "Esta función devuelve un string";
    return write;
}


//Se llama la función plus
let number1 : number = 2;
let number2 : number = 4;

plus(number1, number2);


//se llama la función whiting
console.log(writing());