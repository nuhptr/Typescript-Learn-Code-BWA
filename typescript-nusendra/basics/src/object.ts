// TODO: object

type User = { name: string; age: number }

let user: User = { name: "Adi Nugraha", age: 15 }

// dapat dirubah objectnya
user = { name: "Putra", age: 10 }

console.table(user) // output: { name: 'Putra', age: 10 }
