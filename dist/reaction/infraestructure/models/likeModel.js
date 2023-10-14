"use strict";
// src/infrastructure/models/likeModel.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let LikeModel = class LikeModel extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    })
], LikeModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: false
    })
], LikeModel.prototype, "publicationId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: false
    })
], LikeModel.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false
    })
], LikeModel.prototype, "timestamp", void 0);
LikeModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'likes',
        timestamps: true
    })
], LikeModel);
exports.default = LikeModel;
