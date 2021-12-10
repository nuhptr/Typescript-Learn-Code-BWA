"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    // public name: string;
    // menghemat line variabel di dalam argument constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.name = name;
    }
}
exports.User = User;
let user = new User("Adi Nugraha", 20);
console.log(user); // User: {name: Adi Nugraha, age: 20}
