class Dog {
    bark(): void {
        console.log("Woof!")
    }
}

class Cat {
    meow(): void {
        console.log("Meow!")
    }
}

function animalSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) animal.bark()
    else animal.meow()
}

const dog = new Dog()
const cat = new Cat()

animalSound(dog) // Woof!
animalSound(cat) // Meow!
