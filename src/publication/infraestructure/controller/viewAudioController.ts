import { Request, Response } from "express";
import { ViewAudiosUseCase } from "../../application/viewAudioUseCase";

export class ViewAudiosController {
    
    constructor(readonly viewAudiosUseCase: ViewAudiosUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const audios = await this.viewAudiosUseCase.execute();
            res.status(200).send(audios);
        } catch (error) {
            console.error("Error al obtener audios:", error);
            res.status(500).send({ message: "Error al obtener audios" });
        }
    }
}
