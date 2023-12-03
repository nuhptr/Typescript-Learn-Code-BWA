type Person = { name: string; age: number }

type Employee = { company: string; salary?: number }

type Programmer = Person & Employee

const programmer: Programmer = { name: "Adi", age: 20, company: "Google", salary: 100000 }
console.log(programmer)