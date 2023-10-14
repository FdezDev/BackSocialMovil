import { UserPublication } from "../domain/userPublication";
import { UserPublicationRepository } from "../domain/userPublicationRepository";
import UserPublicationModel from "./models/userPublicationModel";

export class PgsqlUserPublicationRepository implements UserPublicationRepository {
    
    async addPublication(userId: string, description: string, multimedia: string): Promise<UserPublication | null> {
        try {
            // Usando Sequelize para crear una nueva publicación
            const createdPublication = await UserPublicationModel.create({ userId, description, multimedia });
            
            // Convertir el modelo Sequelize en una instancia del dominio UserPublication
            return new UserPublication(createdPublication.id, createdPublication.userId, createdPublication.description, createdPublication.multimedia);
        } catch (error) {
            console.error("Error in PgsqlUserPublicationRepository:", error);
            return null;
        }
    }

}
