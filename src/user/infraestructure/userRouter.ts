import express from "express";
import { addUsersController, listAllUsersController, deleteUserController } from "./dependencies";

export const userRouter = express.Router();

// Ruta para agregar un nuevo usuario
userRouter.post(
    "/create",
    addUsersController.run.bind(addUsersController)
);

// Ruta para obtener todos los usuarios
userRouter.get(
    "/",
    listAllUsersController.run.bind(listAllUsersController)
);

// Ruta para eliminados usuarios
userRouter.delete(
    "/delete/:id",
    deleteUserController.run.bind(deleteUserController)
);

