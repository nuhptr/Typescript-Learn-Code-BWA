"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = exports.people = void 0;
// TODO: static method and static property
class People {
    constructor() { }
    static getNameRole() {
        return "hei";
    }
}
People.getRoleName = "Admin";
// call the static property
exports.people = People.getRoleName;
console.log(exports.people); // Admin
// call the static method
exports.name = People.getNameRole();
console.log(exports.name); // hei
