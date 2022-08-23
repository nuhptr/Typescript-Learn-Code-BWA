export class User {
    // public name: string;

    // menghemat line variabel di dalam argument constructor
    constructor(public name: string, public age: number) {
        // this.name = name;
    }
}

let user = new User("Adi Nugraha", 20);
console.log(user); // User: {name: Adi Nugraha, age: 20}