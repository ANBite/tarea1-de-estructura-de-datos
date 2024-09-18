//Allan Francisco Moisés Chaclán Guinea - 1502023


export class Person {
    private name: string;
    private age: number;
    private city: string;

    constructor(name: string, age: number, city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    public getName(): string {
        return this.name;
    }

    // Setter para el nombre
    public setName(name: string): void {
        this.name = name;
    }

    // Getter para la edad
    public getAge(): number {
        return this.age;
    }

    // Setter para la edad
    public setAge(age: number): void {
        this.age = age;
    }

    // Getter para la ciudad
    public getCity(): string {
        return this.city;
    }

    // Setter para la ciudad
    public setCity(city: string): void {
        this.city = city;
    }
}