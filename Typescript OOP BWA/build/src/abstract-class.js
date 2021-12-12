"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.car = void 0;
class Vehicle {
    start() {
        console.log("brumm");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class MotorCycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
exports.car = new Car();
console.log(exports.car.wheels);
exports.car.start();
