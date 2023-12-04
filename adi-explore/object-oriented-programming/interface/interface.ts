interface Human {
   firstName: string
   lastName: string
   age: number
}

const exampleHuman: Human = { firstName: "John", lastName: "Doe", age: 25 }

// TODO: Interface as Function Type
interface MathOperation {
   (x: number, y: number): number
}

const add: MathOperation = (x, y) => x + y
const subtract: MathOperation = (x, y) => x - y

console.log(add(1, 2)) // 3
console.log(subtract(1, 2)) // -1

// TODO: Interface as Classes
interface Vehicle {
   readonly name: string
   start(): void
   stop(): void
}

class Car implements Vehicle {
   name: string = "Audi"

   constructor(name: string) {
      this.name = name
   }

   start(): void {
      console.log(`${this.name} Car started`)
   }

   stop(): void {
      console.log(`${this.name} Car stopped`)
   }
}

const car: Car = new Car("BMW")
car.name = "Audi"
car.start() // Car started
car.stop() // Car stopped

const CarBMW: Vehicle = {
   name: "BMW",
   start: () => console.log(`Car started`),
   stop: () => console.log(`Car stopped`),
}

// CarBMW.name = "Audi" // Cannot assign to 'name' because it is a read-only property.
