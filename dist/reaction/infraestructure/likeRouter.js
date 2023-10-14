"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.likeRouter = express_1.default.Router();
exports.likeRouter.post("/add", dependencies_1.likeController.addLike.bind(dependencies_1.likeController));
exports.likeRouter.delete("/remove", dependencies_1.likeController.removeLike.bind(dependencies_1.likeController));
exports.likeRouter.get("/count/:publicationId", dependencies_1.likeController.countLikesByPublication.bind(dependencies_1.likeController));
