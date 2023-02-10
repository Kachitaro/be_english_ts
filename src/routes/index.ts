import studentControllers from "../controllers/studentControllers";

function router(app: any){
  //student
  app.get("/student",studentControllers.getStudentList);

};
export default router;