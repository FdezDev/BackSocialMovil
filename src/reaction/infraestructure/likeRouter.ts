import express from "express";
import { likeController } from "./dependencies"


export const likeRouter = express.Router();

likeRouter.post(
    "/add",
    likeController.addLike.bind(likeController)
);

likeRouter.delete(
    "/remove",
    likeController.removeLike.bind(likeController)
);

likeRouter.get(
    "/count/:publicationId",
    likeController.countLikesByPublication.bind(likeController)
);