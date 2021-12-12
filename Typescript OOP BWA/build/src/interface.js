"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asus = void 0;
class Asus {
    constructor(name, isGaming) {
        this.name = "Asus ROG";
        this.isGaming = true;
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
class Macbook {
    constructor(name, keyboardLight) {
        this.name = "Macbook M1";
        this.keyboardLight = true;
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
exports.asus = new Asus("ROG", true);
console.log(exports.asus.on());
