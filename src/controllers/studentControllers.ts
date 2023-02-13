import { IStudent } from './../models/studentInterface';
import { Request, Response } from "express";
//import { IStudent } from "../models/studentInterface";
import studentRepository from "../repositories/studentRepository";
class studentControllers {
  async getStudentList(req: Request, res: Response){
    let raw = await studentRepository.handlerAllStudent();
    let result = raw.map((item: any) => {
      return{
        id: item.id,
        studentName: item.name,
        email: item.email,
        phone: item.phone,
      };
    });
    res.send(result);
  }

  async getStudentById(req: Request, res: Response){
    let raw = await studentRepository.handlerStudentById(req.params.id);
    if (!raw) {
      return res.send("Does not exist in the student list !")
    }
    let result = {
      id: raw.id,
      code: raw.code,
      name: raw.name,
      phone_number: raw.phone_number,
      gender: raw.gender
    }
    res.send(result);
  }

  async updateStudentById(req: Request, res: Response){
    let id: string = req.params.id;
    let payload: IStudent = req.body;
    let studentDetails: string = await studentRepository.handlerStudentById(id);
    await studentRepository.handlerUpdateStudent(id, payload, studentDetails)
  }
}

export default new studentControllers();