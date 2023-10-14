"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRepository = void 0;
const pgsqlAuthRepository_1 = require("./pgsqlAuthRepository");
exports.authRepository = new pgsqlAuthRepository_1.PgsqlAuthRepository();
