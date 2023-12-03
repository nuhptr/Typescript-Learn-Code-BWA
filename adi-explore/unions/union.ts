let myVar: number | string = 10

function Foo(x: number | string): number | string {
   if (typeof x === "number") return x + 10
   else return `You ${x}`
}

interface MyInterface {
   myProp: number | string
}

type UserInfo = { name: string; age: number; address: string }
type AccountDetails = { email: string; password: string }

let user: UserInfo | AccountDetails = {
   email: "someone@gmail.com",
   password: "password123",
   name: "someone",
   age: 99,
   address: "someone's address",
}
