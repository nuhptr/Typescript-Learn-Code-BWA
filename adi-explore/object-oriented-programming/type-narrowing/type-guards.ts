type MyType = string | number

function exampleFunction(x: MyType): void {
   if (typeof x === "string") console.log(x.toUpperCase())
   else console.log(x.toFixed(2))
}

exampleFunction("hello") // HELLO
exampleFunction(42) // 42.00
