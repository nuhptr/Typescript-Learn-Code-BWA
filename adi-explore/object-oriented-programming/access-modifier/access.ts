class Animal {
   // public = accessible from anywhere
   public name: string
   // private = accessible only from inside the class
   private age: number
   // protected = accessible from inside the class and from classes that inherit from it
   protected species: string

   // give default values to the constructor parameters
   constructor(name: string = "undefined", age: number = 0, species: string = "undefined") {
      this.name = name
      this.age = age
      this.species = species
   }

   public getName(): string {
      return this.name
   }

   public getAge(): number {
      return this.age
   }

   public getSpecies(): string {
      return this.species
   }
}

class Dog extends Animal {
   constructor(name: string, age: number) {
      super(name, age, "Husky")
   }

   public getInfo(): string {
      return `Name: ${this.name}, Age: ${this.getAge()}, Species: ${this.species}`
   }
}

const husky = new Dog("Husky", 2)
console.log(husky.getInfo()) // Name: Husky, Age: 2, Species: Husky
