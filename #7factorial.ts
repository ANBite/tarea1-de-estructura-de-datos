//Allan Francisco Moisés Chaclán Guinea - 1502023

function factorial(value : number): number {
    if (value == 0 || value == 1) {
        return 1;
    }

    return value * factorial(value - 1);
}

let proof : number = 3;
console.log(`El factorial de ${proof} es: `,factorial(proof));