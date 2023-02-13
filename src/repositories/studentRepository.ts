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

  handlerCreateStudent(){
  }

  

  handlerDeleteStudent(){

  }

}

export default new studentRepository();