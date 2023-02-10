"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
im;
let initAPIRoutes = (app) => {
    router.get('/getAllStudent');
    return app.use('/api/v1/', router);
};
exports.default = initAPIRoutes;
