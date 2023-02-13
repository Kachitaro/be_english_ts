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
                name: raw.name,
                phone_number: raw.phone_number,
                gender: raw.gender
            };
            res.send(result);
        });
    }
    updateStudentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            console.log(req.body.name);
        });
    }
}
exports.default = new studentControllers();
