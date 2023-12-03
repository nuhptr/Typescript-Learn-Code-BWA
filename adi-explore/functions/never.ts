// function that always throws an error
// function that has an infinite loop
// A variable that can never have a value assigned to it
function throwError(message: string): never {
   throw new Error(message)
}

function infiniteLoop(): never {
   while (true) {}
}

let x: never
function neverReturns(): never {
   while (true) {} // infinite loop but not an error
}

// x = neverReturns() // redundant
