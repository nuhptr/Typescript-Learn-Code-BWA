"use strict";
function getData(value) {
    return value;
}
console.log(getData("nusendra").length); // 8
console.log(getData(123).length); // undifined  (problem)
// TODO: Generic (flexible type) -> T
function myData(value) {
    return value;
}
console.log(myData("Nusendra").length);
console.log(myData(123));
// Generic Function
const arrowFunction = (value) => {
    // return value;
};
console.log(arrowFunction(() => {
    return console.log("Hallo arrow function");
}));
