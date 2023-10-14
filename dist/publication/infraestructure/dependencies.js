"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPublicationController = exports.userPublicationUseCase = exports.pgsqlUsersRepository = void 0;
const pgsqlUserPublicationRepository_1 = require("./pgsqlUserPublicationRepository");
const userPublicationUserCase_1 = require("../application/userPublicationUserCase");
const userPublicationController_1 = require("./controller/userPublicationController");
exports.pgsqlUsersRepository = new pgsqlUserPublicationRepository_1.PgsqlUserPublicationRepository();
exports.userPublicationUseCase = new userPublicationUserCase_1.UserPublicationUseCase(exports.pgsqlUsersRepository);
exports.userPublicationController = new userPublicationController_1.UserPublicationController(exports.userPublicationUseCase);
