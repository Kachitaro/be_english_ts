import { IStudent } from './../models/studentInterface';
import { getAll, getOne } from "../config/database";
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

  handlerUpdateStudent(id: string,payload: IStudent,studentDetails: any){
    const params = payload;
    const query = `
    UPDATE student SET `
  }

  handlerCreateStudent(){
  }

  

  handlerDeleteStudent(){

  }

}

export default new studentRepository();