import { PgsqlUserRepository } from "./pgsqlUserRepository";

import { AddUserUseCase } from "../application/addUserUseCase";
import { AddUsersController } from "./controller/addUserController";
import { ListAllUsersController } from "./controller/listAllUserController";
import { ListAllUserUseCase } from "../application/listAllUserUseCase";
import { DeleteUserUseCase } from "../application/deleteUserUseCase";
import { DeleteUserController } from "./controller/deleteUserController";



export const pgsqlUsersRepository = new PgsqlUserRepository();

export const addUsersUseCase = new AddUserUseCase(pgsqlUsersRepository);
export const addUsersController = new AddUsersController(addUsersUseCase);

export const listAllUsersUseCase = new ListAllUserUseCase(pgsqlUsersRepository);
export const listAllUsersController = new ListAllUsersController(listAllUsersUseCase);

export const deletedUsersUseCase = new DeleteUserUseCase(pgsqlUsersRepository);
export const deleteUserController = new DeleteUserController(deletedUsersUseCase);

