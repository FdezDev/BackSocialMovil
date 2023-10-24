import { Request, Response } from "express";
import { ViewVideosUseCase } from "../../application/viewVideosUseCase";

export class ViewVideosController {
    
    constructor(readonly viewVideosUseCase: ViewVideosUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const videos = await this.viewVideosUseCase.execute();
            res.status(200).send(videos);
        } catch (error) {
            console.error("Error al obtener videos:", error);
            res.status(500).send({ message: "Error al obtener videos" });
        }
    }
}
