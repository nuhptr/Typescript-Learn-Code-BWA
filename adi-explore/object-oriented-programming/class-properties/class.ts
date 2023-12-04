class NewPerson {
   name: string
   age: number

   constructor(name: string, age: number) {
      this.name = name
      this.age = age
   }
}

const newPerson = new NewPerson("Aditya", 21)
console.log(newPerson) // NewPerson { name: 'Aditya', age: 21 }
