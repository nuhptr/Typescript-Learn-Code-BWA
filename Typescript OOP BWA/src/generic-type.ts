function getData(value:any) {
    return value;
}

console.log(getData("nusendra").length); // 8
console.log(getData(123).length); // undifined  (problem)

// TODO: Generic (flexible type) -> T
function myData<T>(value: T) {
    return value;
}

console.log(myData("Nusendra").length);
console.log(myData(123))

// Generic Function
const arrowFunction = <T>(value: T) => {
    // return value;
}

console.log(arrowFunction(() => { 
    return console.log("Hallo arrow function");
}));