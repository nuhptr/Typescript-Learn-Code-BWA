function greet(person: string = "Annonymous", message: string = "Hello") {
   return `${message} ${person}`
}

const response = greet("Adi")
console.log(response)
