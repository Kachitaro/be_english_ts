"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    handlerUpdateStudent(id, payload) {
        let { email, name, phone_number, gender, address } = payload;
        let params = [email, name, phone_number, gender, address, id];
        let query = `UPDATE student SET email = $1, name = $2, phone_number = $3, gender = $4, address = $5 WHERE id = $6`;
        (0, database_1.executeQuery)(query, params);
        return this.handlerStudentById(id);
    }
    handlerCreateStudent() {
    }
    handlerDeleteStudent(id, student_id) {
        console.log("lay id cua student", id);
        console.log("lay student id trong ban user", student_id);
    }
}
exports.default = new studentRepository();
