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
exports.initializeDatabase = exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const userModel_1 = __importDefault(require("../user/infraestructure/models/userModel"));
const userPublicationModel_1 = __importDefault(require("../publication/infraestructure/models/userPublicationModel"));
const likeModel_1 = __importDefault(require("../reaction/infraestructure/models/likeModel"));
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'postgres',
    username: 'postgres',
    password: 'yeremi224',
    models: [userModel_1.default, userPublicationModel_1.default, likeModel_1.default],
});
function initializeDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.sequelize.authenticate();
            console.log('Conexión establecida correctamente.');
            yield exports.sequelize.sync({ force: false });
        }
        catch (err) {
            console.error('No se pudo conectar a la base de datos:', err);
            process.exit(1); // Cierra la aplicación si hay un error de conexión
        }
    });
}
exports.initializeDatabase = initializeDatabase;
