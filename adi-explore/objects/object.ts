const person: { name: string; lastName: string; age: number } = {
   name: "Adriano",
   lastName: "Mota",
   age: 33,
}

console.log(`Name: ${person.name} ${person.lastName} - Age: ${person.age}`)

type Person = { name: string; lastName: string; age: number }

function printUser(): Person {
   return { name: "Adriano", lastName: "Mota", age: 33 }
}

const user = printUser()
console.log(user)
