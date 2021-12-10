"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUmur = void 0;
// TODO: optional parameter using -> ? front of argument
// number + number => number (possibility to undifined)
const getUmur = (val1, val2) => {
    return val1 + " " + val2;
};
exports.getUmur = getUmur;
console.log((0, exports.getUmur)(10, 10));
