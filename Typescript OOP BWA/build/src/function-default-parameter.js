"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullName = void 0;
// TODO: default parameter
const fullName = (firstName = "Adi", lastName = "Nugraha") => {
    return firstName + " " + lastName;
};
exports.fullName = fullName;
console.log((0, exports.fullName)("Abdi")); // => Putra Nugraha returnnya
