import { PgsqlUserPublicationRepository } from "./pgsqlUserPublicationRepository";

import { UserPublicationUseCase } from "../application/userPublicationUserCase";
import { ViewPublicationsUseCase } from "../application/viewPublicationUseCase";
import { DeletePublicationUseCase } from "../application/deletePublicationUseCase";
import { UserPublicationController } from "./controller/userPublicationController";
import { ViewPublicationsController } from "./controller/ViewPublicationsController"; 
import { DeletePublicationController } from "./controller/DeletePublicationController"; 
import { ViewImagesController } from "./controller/viewImagesController";
import { ViewImagesUseCase } from "../application/viewImagesUseCase";
import { ViewAudiosController } from "./controller/viewAudioController";
import { ViewAudiosUseCase } from "../application/viewAudioUseCase";
import { ViewGifsController } from "./controller/viewGifsController";
import { ViewGifsUseCase } from "../application/viewGifsUseCase";
import { ViewPDFsController } from "./controller/viewPDFsController";
import { ViewPDFsUseCase } from "../application/viewPDFsUseCase";
import { ViewVideosController } from "./controller/viewVideosController";
import { ViewVideosUseCase } from "../application/viewVideosUseCase";

export const pgsqlUsersRepository = new PgsqlUserPublicationRepository();

export const userPublicationUseCase = new UserPublicationUseCase(pgsqlUsersRepository);
export const viewPublicationsUseCase = new ViewPublicationsUseCase(pgsqlUsersRepository);
export const deletePublicationUseCase = new DeletePublicationUseCase(pgsqlUsersRepository);

export const userPublicationController = new UserPublicationController(userPublicationUseCase);
export const viewPublicationsController = new ViewPublicationsController(viewPublicationsUseCase);
export const deletePublicationController = new DeletePublicationController(deletePublicationUseCase);


export const viewImagesUseCase = new ViewImagesUseCase(); 
export const viewImagesController = new ViewImagesController(viewImagesUseCase);

export const viewAudiosUseCase = new ViewAudiosUseCase();
export const viewAudioController = new ViewAudiosController(viewAudiosUseCase);

export const viewGifsUseCase = new ViewGifsUseCase();
export const viewGifsController = new ViewGifsController(viewGifsUseCase);

export const viewPDFsUseCase = new ViewPDFsUseCase();
export const viewPDFsController = new ViewPDFsController(viewPDFsUseCase);

export const viewVideosUseCase = new ViewVideosUseCase();
export const viewVideosController = new ViewVideosController(viewVideosUseCase);