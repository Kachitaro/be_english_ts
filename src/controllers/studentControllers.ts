import { Request, Response } from "express";
//import { IStudent } from "../models/studentInterface";
import studentRepository from "../repositories/studentRepository";
class studentControllers {
  async getStudentList(req: Request, res: Response){
    const raw = await studentRepository.getAll();
    const result = raw.map((item: any) => {
      return{
        id: item.id,
        studentName: item.name,
        email: item.email,
        phone: item.phone,
      };
    });
    res.send(result);
  }
}

export default new studentControllers();