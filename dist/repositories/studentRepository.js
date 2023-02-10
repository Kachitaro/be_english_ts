"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../config/database");
//import { IStudent } from "../models/studentInterface";
const database_1 = require("../config/database");
class studentRepository {
    getAll() {
        const query = 'Select * from student';
        return (0, database_1.getAll)(query);
    }
    getStudentById(id) {
        const params = [id];
        const query = 'Select * from student where id = $1';
        return (0, database_1.getOne)(query, params);
    }
}
exports.default = new studentRepository();
