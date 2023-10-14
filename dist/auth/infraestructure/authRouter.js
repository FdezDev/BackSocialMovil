"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const authController_1 = require("./controller/authController");
const authUseCase_1 = require("../application/authUseCase");
const pgsqlAuthRepository_1 = require("./pgsqlAuthRepository");
const authRepository = new pgsqlAuthRepository_1.PgsqlAuthRepository();
const authUseCase = new authUseCase_1.AuthUseCase(authRepository);
const authController = new authController_1.AuthController(authUseCase);
const authRouter = express_1.default.Router();
exports.authRouter = authRouter;
authRouter.post('/login', authController.run.bind(authController));
