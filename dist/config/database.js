"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = exports.getAll = exports.executeQuery = exports.client = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    host: (_a = process.env.POSTGRES_HOST) !== null && _a !== void 0 ? _a : 'localhost',
    port: 5432,
    database: (_b = process.env.POSTGRES_DATABASE) !== null && _b !== void 0 ? _b : 'englishcenter_management',
    user: (_c = process.env.POSTGRES_USER) !== null && _c !== void 0 ? _c : 'postgres',
    password: (_d = process.env.POSTGRES_PASSWORD) !== null && _d !== void 0 ? _d : 'postgres123',
};
exports.client = new pg_1.Client(config);
exports.client.connect((err) => {
    if (err) {
        console.error('Failed to connect to database:', err.stack);
    }
    else {
        console.log('🟢 Successfully connected to database');
    }
});
function executeQuery(sqlQuery, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = yield exports.client.query(sqlQuery, params);
        console.log("Executed query successfully!");
    });
}
exports.executeQuery = executeQuery;
;
function getAll(sqlQuery) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = yield exports.client.query(sqlQuery);
            return query.rows;
        }
        catch (e) {
            console.log("Query fail: ", e);
            return [];
        }
    });
}
exports.getAll = getAll;
;
function getOne(sqlQuery, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = yield exports.client.query(sqlQuery, params);
            return query.rows[0];
        }
        catch (e) {
            console.log("Query fail: ", e);
        }
    });
}
exports.getOne = getOne;
;
