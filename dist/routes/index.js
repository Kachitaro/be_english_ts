"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentControllers_1 = __importDefault(require("../controllers/studentControllers"));
function router(app) {
    //student
    app.get("/student", studentControllers_1.default.getStudentList);
    app.get("/studentById/:id", studentControllers_1.default.getStudentById);
    app.post("/createStudent", studentControllers_1.default.createStudent);
    app.put("/updateStudentById/:id", studentControllers_1.default.updateStudentById);
    app.delete("/deleteStudent/:id", studentControllers_1.default.deleteStudentById);
}
;
exports.default = router;
