import { IUsers } from './../models/usersInterface';
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
      studentName: raw.name,
      phone_number: raw.phone_number,
      gender: raw.gender,
    }
    res.send(result);
  }

  async updateStudentById(req: Request, res: Response){
    let id: string = req.params.id;
    let payload: IStudent = req.body;
    let raw = await studentRepository.handlerUpdateStudent(id, payload);
    res.send(raw);
  }

  async deleteStudentById(req: Request, res: Response){
    let raw = await studentRepository.handlerStudentById(req.params.id);
    let result = await studentRepository.handlerDeleteStudent(raw.student_id);
    res.send(result.map((item: any) => {
      return{
        id: item.id,
        studentName: item.name,
        email: item.email,
        phone: item.phone,
      }
    }));
  }

  async createStudent(req: Request, res: Response){
    let payload: IStudent = req.body;
    let password: IUsers = req.body;
    let raw = await studentRepository.handlerCreateStudent(payload, password);
    res.send(raw);
  }
}

export default new studentControllers();