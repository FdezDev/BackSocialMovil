"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeController = exports.likeUseCase = exports.pgsqlLikeRepository = void 0;
const likeController_1 = require("../infraestructure/controller/likeController");
const pgsqlLikeRepository_1 = require("../infraestructure/pgsqlLikeRepository");
const likeUseCase_1 = require("../application/likeUseCase");
exports.pgsqlLikeRepository = new pgsqlLikeRepository_1.PgsqlLikeRepository();
exports.likeUseCase = new likeUseCase_1.LikeUseCase(exports.pgsqlLikeRepository);
exports.likeController = new likeController_1.LikeController(exports.likeUseCase);
