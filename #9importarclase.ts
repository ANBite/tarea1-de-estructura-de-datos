//Allan Francisco Moisés Chaclán Guinea - 1502023

import { Person } from "./#8exportarclase";

const human = new Person("Carlos", 22, "Xela");

console.log("Datos iniciales:")
console.log(`Nombre: ${human.getName()}`);
console.log(`Edad: ${human.getAge()}`);
console.log(`Ciudad: ${human.getCity()}`);

console.log("\nDatos cambiados:")
human.setName("Martha");
human.setAge(49);
human.setCity("Kiche");


console.log(`Nombre: ${human.getName()}`);
console.log(`Edad: ${human.getAge()}`);
console.log(`Ciudad: ${human.getCity()}`);