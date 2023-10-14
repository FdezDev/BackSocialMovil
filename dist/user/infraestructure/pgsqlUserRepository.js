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
exports.PgsqlUserRepository = void 0;
const user_1 = require("../domain/user");
const userModel_1 = __importDefault(require("./models/userModel"));
class PgsqlUserRepository {
    addUser(name, last_name, email, password, profilePicture) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdUser = yield userModel_1.default.create({ name, last_name, email, password, profilePicture });
                return new user_1.User(createdUser.id, createdUser.name, createdUser.last_name, createdUser.email, createdUser.password, createdUser.profilePicture);
            }
            catch (error) {
                console.error("Error in PgsqlUserRepository:", error);
                return null;
            }
        });
    }
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userModel_1.default.findAll();
                return users.map(user => new user_1.User(user.id, user.name, user.last_name, user.email, user.password, user.profilePicture));
            }
            catch (error) {
                console.error("Error in PgsqlUserRepository:", error);
                return [];
            }
        });
    }
    deleteUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield userModel_1.default.destroy({ where: { id } });
                return result > 0; // Retorna true si se eliminó al menos un registro.
            }
            catch (error) {
                console.error("Error in PgsqlUsersRepository:", error);
                return false;
            }
        });
    }
}
exports.PgsqlUserRepository = PgsqlUserRepository;
