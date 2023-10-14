"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let UserModel = class UserModel extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    })
], UserModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: false
    })
], UserModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: false
    })
], UserModel.prototype, "last_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: false
    })
], UserModel.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: false
    })
], UserModel.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(512),
        allowNull: true // Puede ser nulo si el usuario no sube una imagen de perfil.
    })
], UserModel.prototype, "profilePicture", void 0);
UserModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'users',
        timestamps: true
    })
], UserModel);
exports.default = UserModel;
