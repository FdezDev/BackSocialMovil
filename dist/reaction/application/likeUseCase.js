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
exports.LikeUseCase = void 0;
class LikeUseCase {
    constructor(likeRepository) {
        this.likeRepository = likeRepository;
    }
    addLike(publicationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.likeRepository.addLike(publicationId, userId);
            }
            catch (error) {
                console.error("Error in LikeUseCase:", error);
                return null;
            }
        });
    }
    removeLike(publicationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.likeRepository.removeLike(publicationId, userId);
            }
            catch (error) {
                console.error("Error in LikeUseCase:", error);
                return false;
            }
        });
    }
    countLikesByPublication(publicationId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.likeRepository.countLikesByPublication(publicationId);
            }
            catch (error) {
                console.error("Error in LikeUseCase:", error);
                return 0;
            }
        });
    }
}
exports.LikeUseCase = LikeUseCase;
