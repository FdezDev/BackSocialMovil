import { PgsqlUserPublicationRepository } from "./pgsqlUserPublicationRepository";

import { UserPublicationUseCase } from "../application/userPublicationUserCase";
import { UserPublicationController } from "./controller/userPublicationController";


export const pgsqlUsersRepository = new PgsqlUserPublicationRepository();

export const userPublicationUseCase = new UserPublicationUseCase(pgsqlUsersRepository);
export const userPublicationController = new UserPublicationController(userPublicationUseCase);

