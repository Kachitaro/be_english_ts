"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { IStudent } from "../models/studentInterface";
const database_1 = require("../config/database");
class studentRepository {
    handlerAllStudent() {
        const query = 'Select * from student';
        return (0, database_1.getAll)(query);
    }
    handlerStudentById(id) {
        const params = [id];
        const query = 'Select * from student where id = $1';
        return (0, database_1.getOne)(query, params);
    }
    handlerUpdateStudent(id, email, name, phone_number, gender, address) {
    }
    handlerCreateStudent() {
    }
    handlerDeleteStudent() {
    }
}
exports.default = new studentRepository();
