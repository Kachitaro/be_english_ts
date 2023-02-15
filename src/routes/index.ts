import studentControllers from "../controllers/studentControllers";

function router(app: any){
  //student
  app.get("/student",studentControllers.getStudentList);
  app.get("/studentById/:id",studentControllers.getStudentById);
  app.put("/updateStudentById/:id",studentControllers.updateStudentById);
  app.get("/deleteStudent/:id", studentControllers.deleteStudentById);

};
export default router;