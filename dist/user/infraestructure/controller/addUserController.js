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
const bcrypt_1 = __importDefault(require("bcrypt"));
const multer_1 = __importDefault(require("multer"));
const admin = __importStar(require("firebase-admin"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
class AddUsersController {
    constructor(addUsesUseCase) {
        this.addUsesUseCase = addUsesUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                upload.single('profilePicture')(req, res, (err) => __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        return res.status(400).send({ status: "error", message: "Error uploading image." });
                    }
                    let { name, last_name, email, password, profilePicture } = req.body;
                    const saltRounds = 10;
                    password = yield bcrypt_1.default.hash(password, saltRounds);
                    if (req.file) {
                        const bucket = admin.storage().bucket();
                        const blob = bucket.file(req.file.originalname);
                        const blobStream = blob.createWriteStream();
                        blobStream.on('error', (err) => {
                            console.error('Error uploading file:', err);
                            return res.status(500).send({ status: "error", message: "Error uploading image to Firebase." });
                        });
                        blobStream.on('finish', () => __awaiter(this, void 0, void 0, function* () {
                            const publicUrl = `https://firebasestorage.googleapis.com/v0/b/backsocialmovil.appspot.com/o/${encodeURI(blob.name)}?alt=media`;
                            let createdUsers = yield this.addUsesUseCase.run(name, last_name, email, password, publicUrl);
                            if (createdUsers) {
                                return res.status(201).send({
                                    status: "success",
                                    data: {
                                        name: createdUsers.name,
                                        last_name: createdUsers.last_name,
                                        email: createdUsers.email,
                                        profilePicture: publicUrl
                                    },
                                    message: "Usuario ha sido creado exitosamente"
                                });
                            }
                            else {
                                return res.status(400).send({
                                    status: "error",
                                    data: [],
                                    validations: [],
                                    message: "Error al crear Usuario nuevo, intentalo mas tarde"
                                });
                            }
                        }));
                        blobStream.end(req.file.buffer);
                    }
                    else {
                        return res.status(400).send({ status: "error", message: "Profile picture is required." });
                    }
                }));
            }
            catch (error) {
                console.error("Error in AddUsersController:", error);
                res.status(500).send({
                    status: "error",
                    message: "Error interno del servidor"
                });
            }
        });
    }
}
exports.AddUsersController = AddUsersController;
