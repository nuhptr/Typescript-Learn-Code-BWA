"use strict";
// tipe data pada balikan function
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = exports.age = exports.nama = void 0;
// Kembalian string
function getName(name) {
    return `Hello, my name is ${name}`;
}
exports.nama = getName("Dendi");
console.log(exports.nama);
// Kembalian Number
function getAge(age) {
    return age;
}
exports.age = getAge(10);
console.log(exports.age);
// Argument
function multiply(val1, val2) {
    return val1 * val2;
}
exports.result = multiply(2, 10);
console.log(exports.result);
