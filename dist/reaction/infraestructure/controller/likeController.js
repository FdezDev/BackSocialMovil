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
exports.LikeController = void 0;
class LikeController {
    constructor(likeUseCase) {
        this.likeUseCase = likeUseCase;
    }
    addLike(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { publicationId, userId } = req.body;
                const result = yield this.likeUseCase.addLike(publicationId, userId);
                if (result) {
                    return res.status(201).send({ status: "success", message: "Like added successfully." });
                }
                else {
                    return res.status(500).send({ status: "error", message: "Internal server error." });
                }
            }
            catch (error) {
                console.error("Error in LikeController:", error);
                return res.status(500).send({ status: "error", message: "Internal server error." });
            }
        });
    }
    removeLike(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { publicationId, userId } = req.body;
                const result = yield this.likeUseCase.removeLike(publicationId, userId);
                if (result) {
                    return res.status(200).send({ status: "success", message: "Like removed successfully." });
                }
                else {
                    return res.status(500).send({ status: "error", message: "Internal server error." });
                }
            }
            catch (error) {
                console.error("Error in LikeController:", error);
                return res.status(500).send({ status: "error", message: "Internal server error." });
            }
        });
    }
    countLikesByPublication(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { publicationId } = req.params;
                const count = yield this.likeUseCase.countLikesByPublication(publicationId);
                return res.status(200).send({ status: "success", data: { count } });
            }
            catch (error) {
                console.error("Error in LikeController:", error);
                return res.status(500).send({ status: "error", message: "Internal server error." });
            }
        });
    }
}
exports.LikeController = LikeController;
