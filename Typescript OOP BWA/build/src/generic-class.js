"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = void 0;
class List {
    constructor(...element) {
        this.data = element;
    }
    add(element) {
        this.data.push(element);
    }
    addMultipleElement(...elements) {
        this.data.push(...elements);
    }
    get getAllArray() {
        return this.data;
    }
}
exports.number = new List(1, 2, 3, 4, 5, 6, 7);
exports.number.add(5);
exports.number.addMultipleElement(7, 8, 9);
console.log(exports.number.getAllArray); // [1, 2, 3, 4, 5, 6, 7]
// passing duoble value
let random = new List(1, 2, "adi");
