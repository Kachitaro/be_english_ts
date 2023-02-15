import studentControllers from "../controllers/studentControllers";

function router(app: any){
  //student
  app.get("/student",studentControllers.getStudentList);
  app.get("/studentById/:id",studentControllers.getStudentById);
  app.post("/createStudent", studentControllers.createStudent);
  app.put("/updateStudentById/:id",studentControllers.updateStudentById);
  app.delete("/deleteStudent/:id", studentControllers.deleteStudentById);

};
export default router;