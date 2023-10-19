import { PgsqlUserPublicationRepository } from "./pgsqlUserPublicationRepository";

import { UserPublicationUseCase } from "../application/userPublicationUserCase";
import { ViewPublicationsUseCase } from "../application/viewPublicationUseCase";
import { DeletePublicationUseCase } from "../application/deletePublicationUseCase";
import { UserPublicationController } from "./controller/userPublicationController";
import { ViewPublicationsController } from "./controller/ViewPublicationsController"; // Asumiendo que creaste este controller
import { DeletePublicationController } from "./controller/DeletePublicationController"; // Asumiendo que creaste este controller

export const pgsqlUsersRepository = new PgsqlUserPublicationRepository();

export const userPublicationUseCase = new UserPublicationUseCase(pgsqlUsersRepository);
export const viewPublicationsUseCase = new ViewPublicationsUseCase(pgsqlUsersRepository);
export const deletePublicationUseCase = new DeletePublicationUseCase(pgsqlUsersRepository);

export const userPublicationController = new UserPublicationController(userPublicationUseCase);
export const viewPublicationsController = new ViewPublicationsController(viewPublicationsUseCase);
export const deletePublicationController = new DeletePublicationController(deletePublicationUseCase);
