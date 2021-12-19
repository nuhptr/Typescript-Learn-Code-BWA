"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let data = [
    { id: 1, name: "adi" },
    { id: 2, name: "budi" },
    { id: 3, name: "Cici" },
    { id: 4, name: "Didi" },
];
// Controllers
class UserController {
    index(req, res) {
        return res.send(data);
    }
    create(req, res) {
        const { id, name } = req === null || req === void 0 ? void 0 : req.body;
        data.push({ id, name });
        return res.send(`success created ${name}`);
    }
    show(req, res) {
        const { id } = req.params;
        let person = data.find((item) => item.id == id);
        return res.send(person);
    }
    update(req, res) {
        const { id } = req === null || req === void 0 ? void 0 : req.params;
        const { name } = req === null || req === void 0 ? void 0 : req.body;
        let person = data.find((item) => item.id == id);
        person.name = name;
        return res.send(`update ${id} berhasil`);
    }
    delete(req, res) {
        const { id } = req.params;
        let people = data.filter((item) => item.id != id);
        return res.send(people);
    }
}
// TODO: setiap selesai membuat
exports.default = new UserController();
