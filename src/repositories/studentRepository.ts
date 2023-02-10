import "../config/database";
//import { IStudent } from "../models/studentInterface";
import { getAll, getOne } from "../config/database";

class studentRepository{
  getAll(){
    const query = 'Select * from student';
    return getAll(query);
  }

  getStudentById(id: string){
    const params = [id]
    const query = 'Select * from student where id = $1';
    return getOne(query, params);
  }
}

export default new studentRepository();