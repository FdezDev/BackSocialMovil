"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPublicationRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.userPublicationRouter = express_1.default.Router();
exports.userPublicationRouter.post("/public", dependencies_1.userPublicationController.run.bind(dependencies_1.userPublicationController));
