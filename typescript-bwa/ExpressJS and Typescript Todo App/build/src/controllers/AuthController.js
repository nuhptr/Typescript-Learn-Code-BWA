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
const Authentication_1 = __importDefault(require("../utils/Authentication"));
const Authentication_2 = __importDefault(require("../utils/Authentication"));
const db = require("../db/models");
// Controllers
class AuthController {
    constructor() {
        this.register = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                let { username, password } = req.body;
                const hashedPassword = yield Authentication_2.default.passwordHash(password);
                const createdUser = yield db.user.create({
                    username,
                    password: hashedPassword,
                });
                return res.send(createdUser);
            });
        };
        this.login = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                // TODO: cari data user by username
                let { username, password } = req === null || req === void 0 ? void 0 : req.body;
                const user = yield db.user.findOne({
                    where: { username },
                });
                // TODO: check password
                let compare = yield Authentication_1.default.passwordCheck(password, user.password);
                // TODO: generate token
                if (compare) {
                    let token = Authentication_1.default.generateToken(user.id, username, user.password);
                    return res.send({
                        token,
                    });
                }
                return res.send("auth failed");
            });
        };
        this.profile = function (req, res) {
            return res.send(req.app.locals.credential);
        };
    }
}
// TODO: setiap selesai membuat
exports.default = new AuthController();
