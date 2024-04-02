"use strict";
// tipe data pada balikan function
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = exports.age = exports.nama = void 0;
// TODO: Kembalian string () : string
function getName(name) {
    return `Hello, my name is ${name}`;
}
exports.nama = getName("Dendi");
console.log(exports.nama); // Hello, my name is Dendi
// TODO: Kembalian Number () : number
function getAge(age) {
    return age;
}
exports.age = getAge(10);
console.log(exports.age); // 10
// TODO: Argument -> val1: number
function multiply(val1, val2) {
    return val1 * val2;
}
exports.result = multiply(2, 10);
console.log(exports.result); // 20
const Add = (val1, val2) => {
    return val1 + val2;
};
console.log(Add(20, 10)); // 30
