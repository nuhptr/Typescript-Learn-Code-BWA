const person: { name: string; lastName: string; age: number } = {
    name: "Adriano",
    lastName: "Mota",
    age: 33,
}

console.log(`Name: ${person.name} ${person.lastName} - Age: ${person.age}`)

type PersonAmazing = {
    name: string
    lastName: string
    age: number
}

function printUser(): PersonAmazing {
    return { name: "Adriano", lastName: "Mota", age: 33 }
}

const user = printUser()
console.log(user)
