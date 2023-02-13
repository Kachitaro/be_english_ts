import studentControllers from "../controllers/studentControllers";

function router(app: any){
  //student
  app.get("/student",studentControllers.getStudentList);
  app.get("/studentById/:id",studentControllers.getStudentById);
  app.post("/updateStudentById/:id",studentControllers.updateStudentById);

};
export default router;