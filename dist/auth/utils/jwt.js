"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = '07bae8b8b1abf0b6e836ffb20f59eed6a1908c111ae3f9864a77a6a9fe1ee445'; // se cambia a .env
function generateToken(payload) {
    return jsonwebtoken_1.default.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}
exports.generateToken = generateToken;
function verifyToken(token) {
    return jsonwebtoken_1.default.verify(token, SECRET_KEY);
}
exports.verifyToken = verifyToken;
