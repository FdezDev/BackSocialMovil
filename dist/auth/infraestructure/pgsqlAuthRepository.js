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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgsqlAuthRepository = void 0;
const userModel_1 = __importDefault(require("../../user/infraestructure/models/userModel"));
const password_1 = require("../utils/password");
const auth_1 = require("../domain/auth");
class PgsqlAuthRepository {
    verifyUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userModel_1.default.findOne({ where: { email: email } });
            if (user && (yield (0, password_1.comparePasswords)(password, user.password))) {
                return new auth_1.Auth(user.email, user.password);
            }
            return null;
        });
    }
}
exports.PgsqlAuthRepository = PgsqlAuthRepository;
