"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class BaseRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
}
// TODO : setiap selesai membuat
exports.default = BaseRouter;
