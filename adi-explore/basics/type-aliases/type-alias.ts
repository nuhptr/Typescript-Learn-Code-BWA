type CarType = { name: string; year: number }

function printCar(car: CarType) {
   console.log(car.name, car.year)
}

const myCar: CarType = { name: "Ford", year: 2000 }
printCar(myCar)
