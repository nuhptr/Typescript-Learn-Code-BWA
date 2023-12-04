let color2: "red" | "green" | "blue"
color2 = "red"
// color = "yellow" // Error: Type '"yellow"' is not assignable to type '"red" | "green" | "blue"'.

let number: 1 | 2 | 3 | 4 | 5
number = 1
// number = 6 // Error: Type '6' is not assignable to type '1 | 2 | 3 | 4 | 5'.

let isTrue: true
isTrue = true
// isTrue = false // Error: Type 'false' is not assignable to type 'true'.
