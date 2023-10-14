import express from "express";
import { userPublicationController } from "./dependencies";

export const userPublicationRouter = express.Router();

userPublicationRouter.post(
    "/public",
    userPublicationController .run.bind(userPublicationController)
);
