"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.AddUsersController = void 0;
const multer_1 = __importDefault(require("multer"));
const admin = __importStar(require("firebase-admin"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// Configuración de Firebase (esto puede ir en otro archivo para modularidad)
const serviceAccount = require("path/to/your/serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "your-app-id.appspot.com"
});
const bucket = admin.storage().bucket();
// Configuración de Multer
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
class AddUsersController {
    constructor(addUsesUseCase) {
        this.addUsesUseCase = addUsesUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name, last_name, email, password } = req.body;
                // Encriptar la contraseña
                const saltRounds = 10;
                password = yield bcrypt_1.default.hash(password, saltRounds);
                let createdUsers = yield this.addUsesUseCase.run(name, last_name, email, password);
                if (createdUsers) {
                    return res.status(201).send({
                        status: "success",
                        data: {
                            name: createdUsers.name,
                            last_name: createdUsers.last_name,
                            email: createdUsers.email
                        },
                        message: "Usuario ha sido creado exitosamente"
                    });
                }
                res.status(400).send({
                    status: "error",
                    data: [],
                    validations: [],
                    message: "Error al crear Usuario nuevo, intentalo mas tarde"
                });
            }
            catch (error) {
                console.error("Error in AddUsersController:", error);
                res.status(500).send({
                    status: "error",
                    message: "Error interno del servidor"
                });
            }
            if (!req.file) {
                res.status(400).send("No file uploaded.");
                return;
            }
            const blob = bucket.file(Date.now() + '-' + req.file.originalname);
            const blobStream = blob.createWriteStream({
                metadata: {
                    contentType: req.file.mimetype
                }
            });
            blobStream.on("error", (err) => {
                console.error("Error uploading file:", err);
                res.status(500).send("Error uploading file.");
            });
            blobStream.on("finish", () => __awaiter(this, void 0, void 0, function* () {
                const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
                // Usar publicUrl para almacenar en Postgres junto con otros datos del usuario
                let { name, last_name, email, password } = req.body;
                // Encriptar la contraseña
                const saltRounds = 10;
                password = yield bcrypt_1.default.hash(password, saltRounds);
                let createdUser = yield this.addUsesUseCase.run(name, last_name, email, password, publicUrl);
                // ... resto de tu lógica ...
            }));
            blobStream.end(req.file.buffer);
        });
    }
}
exports.AddUsersController = AddUsersController;
// En tu archivo de rutas:
// app.post('/ruta', upload.single('profilePicture'), addUsersController.run);
