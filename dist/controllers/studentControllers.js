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
//import { IStudent } from "../models/studentInterface";
const studentRepository_1 = __importDefault(require("../repositories/studentRepository"));
class studentControllers {
    getStudentList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let raw = yield studentRepository_1.default.handlerAllStudent();
            let result = raw.map((item) => {
                return {
                    id: item.id,
                    studentName: item.name,
                    email: item.email,
                    phone: item.phone,
                };
            });
            res.send(result);
        });
    }
    getStudentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let raw = yield studentRepository_1.default.handlerStudentById(req.params.id);
            if (!raw) {
                return res.send("Does not exist in the student list !");
            }
            let result = {
                id: raw.id,
                code: raw.code,
                studentName: raw.name,
                phone_number: raw.phone_number,
                gender: raw.gender,
            };
            res.send(result);
        });
    }
    updateStudentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let payload = req.body;
            let raw = yield studentRepository_1.default.handlerUpdateStudent(id, payload);
            res.send(raw);
        });
    }
    deleteStudentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let raw = yield studentRepository_1.default.handlerStudentById(req.params.id);
            let getIdUser = studentRepository_1.default.handlerDeleteStudent(id, raw.student_id);
            res.send('ok');
        });
    }
}
exports.default = new studentControllers();
