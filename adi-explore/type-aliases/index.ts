type Car = { name: string; year: number }

function printCar(car: Car) {
   console.log(car.name, car.year)
}

const myCar: Car = { name: "Ford", year: 2000 }
printCar(myCar)