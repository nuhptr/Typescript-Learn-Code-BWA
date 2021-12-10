"use strict";
// TODO: Inheritance
// public =  bisa diakses semua kelas
// protected = hanya bisa diakses kelas turunannya saja
// private = hanya di akses dari class itu sendiri
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = exports.Admin = exports.Users = void 0;
class Users {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.getAge = () => {
            return this.age;
        };
    }
    setName(value) {
        this.name = value;
    }
}
exports.Users = Users;
class Admin extends Users {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
}
exports.Admin = Admin;
exports.admin = new Admin("089674135843", "Adi", 20);
console.log(`umur admin ${exports.admin.getName()} adalah ${exports.admin.getAge()}`);
console.log(exports.admin.getRole());
console.log(exports.admin.phone);
