import express from "express";
import { userPublicationController } from "./dependencies";
import { authMiddleware } from "../../auth/middlewares/authMiddleware"; 

export const userPublicationRouter = express.Router();
userPublicationRouter.use(authMiddleware);


userPublicationRouter.post(
    "/public",
    userPublicationController .run.bind(userPublicationController)
);
