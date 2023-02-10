"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
require("./config/database"); //connect database
const index_1 = __importDefault(require("./routes/index"));
//config 
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
(0, index_1.default)(app);
//lister port
let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`🟢 app listening on localhost:${port}`);
});
