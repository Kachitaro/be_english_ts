import { IUsers } from './../models/usersInterface';
import { IStudent } from './../models/studentInterface';
import { getAll, getOne, executeQuery } from "../config/database";
class studentRepository{
  handlerAllStudent(){
    const query = 'Select * from student';
    return getAll(query);
  }

  handlerStudentById(id: string){
    const params = [id]
    const query = 'Select * from student where id = $1';
    return getOne(query, params);
  }

  handlerUpdateStudent(id: string,payload: IStudent){
    let {email, name, phone_number, gender, address} = payload;
    let params = [email, name, phone_number, gender, address, id];
    let query = `UPDATE student SET email = $1, name = $2, phone_number = $3, gender = $4, address = $5 WHERE id = $6`;
    executeQuery(query, params);
    return this.handlerStudentById(id);
  }

  handlerCreateStudent(payloadStudent: IStudent,payloadUser: IUsers ){
    let {email, name, phone_number, gender, address} = payloadStudent;
    let {password} = payloadUser;
    let paramsUser = [email, password]
    let paramsStudent = [name, phone_number, gender, address, email];
    let queryCUser = `WITH new_user AS (INSERT INTO users (username, password)VALUES ($1, $2) RETURNING id) INSERT INTO student (email,student_id)VALUES ($1,(SELECT id FROM new_user))`;
    let queryCStudent = `Update student set name = $1, phone_number = $2, gender = $3, address = $4 WHERE email = $5 `;
    executeQuery(queryCUser,paramsUser);
    executeQuery(queryCStudent, paramsStudent);
    return this.handlerAllStudent();
  }

  

  handlerDeleteStudent(student_id: string){
    let query = `DELETE FROM student as s using users as u where s.student_id = u.id and s.student_id = $1`;
    let queryInUser = `DELETE FROM users where id = $1`
    let params = [student_id]
    executeQuery(query, params);
    executeQuery(queryInUser, params);
    return this.handlerAllStudent();
  }


}

export default new studentRepository();