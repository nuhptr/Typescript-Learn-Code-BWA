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
        // private property to getter setter
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    // TODO: getter setter
    set email(value) {
        if (value.length < 5) {
            this._email = "Email salah";
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
exports.Admin = Admin;
exports.admin = new Admin("089674135843", "Adi", 20);
console.log(`nama admin ${exports.admin.getName()} dan umurnya ${exports.admin.getAge()}`); // nama admin adi dan umurnya 20
console.log(exports.admin.getRole()); // {read: true, write: true}
console.log(exports.admin.phone); // 089674135843
exports.admin.email = "nugrahaadi733@gmail.com";
console.log(exports.admin.email); // nugrahaadi733@gmail.com
