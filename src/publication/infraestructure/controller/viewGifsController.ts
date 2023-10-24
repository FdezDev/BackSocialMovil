import { Request, Response } from "express";
import { ViewGifsUseCase } from "../../application/viewGifsUseCase";

export class ViewGifsController {
    
    constructor(readonly viewGifsUseCase: ViewGifsUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const gifs = await this.viewGifsUseCase.execute();
            res.status(200).send(gifs);
        } catch (error) {
            console.error("Error al obtener GIFs:", error);
            res.status(500).send({ message: "Error al obtener GIFs" });
        }
    }
}
