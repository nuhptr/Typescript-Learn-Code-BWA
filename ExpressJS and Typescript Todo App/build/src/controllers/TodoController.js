"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoServices_1 = __importDefault(require("../services/TodoServices"));
class TodoController {
    constructor() {
        this.index = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const service = new TodoServices_1.default(req);
                const todos = yield service.getAll();
                return res.send({
                    data: todos,
                    message: `Get All Todo id user ${service.credential.id}`,
                });
            });
        };
        this.create = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const service = new TodoServices_1.default(req);
                const todo = yield service.store();
                return res.send({
                    data: todo,
                    message: "Todo Created",
                });
            });
        };
        this.show = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const service = new TodoServices_1.default(req);
                const todo = yield service.getOne();
                return res.send({
                    data: todo,
                    message: `Success Get Data`,
                });
            });
        };
        this.update = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const service = new TodoServices_1.default(req);
                const todo = yield service.update();
                return res.send({
                    data: todo,
                    message: `todo update`,
                });
            });
        };
        this.delete = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const service = new TodoServices_1.default(req);
                const todo = yield service.delete();
                return res.send({
                    data: todo,
                    message: "todo deleted",
                });
            });
        };
    }
}
exports.default = new TodoController();
