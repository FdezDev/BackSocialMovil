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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
class AuthController {
    constructor(authUseCase) {
        this.authUseCase = authUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const result = yield this.authUseCase.run(email, password);
            // Basado en el estado, responde con el código de estado adecuado
            if (result.status === 'success' && result.token) {
                res.status(200).send({ status: 'success', token: result.token });
            }
            else {
                res.status(401).send(result);
            }
        });
    }
}
exports.AuthController = AuthController;
