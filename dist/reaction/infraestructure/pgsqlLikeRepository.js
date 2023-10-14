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
exports.PgsqlLikeRepository = void 0;
const like_1 = require("../domian/like");
const likeModel_1 = __importDefault(require("./models/likeModel"));
class PgsqlLikeRepository {
    addLike(publicationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdLike = yield likeModel_1.default.create({ publicationId, userId, timestamp: new Date() });
                return new like_1.Like(createdLike.id, createdLike.publicationId, createdLike.userId, createdLike.timestamp);
            }
            catch (error) {
                console.error("Error in PgsqlLikeRepository:", error);
                return null;
            }
        });
    }
    removeLike(publicationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield likeModel_1.default.destroy({
                    where: {
                        publicationId: publicationId,
                        userId: userId
                    }
                });
                return result > 0; // true si se eliminó al menos un registro, false en caso contrario
            }
            catch (error) {
                console.error("Error in PgsqlLikeRepository:", error);
                return false;
            }
        });
    }
    countLikesByPublication(publicationId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const count = yield likeModel_1.default.count({
                    where: {
                        publicationId: publicationId
                    }
                });
                return count;
            }
            catch (error) {
                console.error("Error in PgsqlLikeRepository:", error);
                return 0;
            }
        });
    }
}
exports.PgsqlLikeRepository = PgsqlLikeRepository;
