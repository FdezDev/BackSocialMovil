import { UserPublication } from "./userPublication";

export interface UserPublicationRepository {
    addPublication(userId: string, description: string, multimedia: string): Promise<UserPublication | null>;
}
