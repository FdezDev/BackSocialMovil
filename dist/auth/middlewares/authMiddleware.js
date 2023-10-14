"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
function authMiddleware(req, res, next) {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token)
        return res.status(401).send({ status: 'error', message: 'Token requerido' });
    try {
        next();
    }
    catch (error) {
        res.status(401).send({ status: 'error', message: 'Token inválido' });
    }
}
exports.authMiddleware = authMiddleware;
