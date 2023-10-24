import { Request, Response } from "express";
import { ViewImagesUseCase } from "../../application/viewImagesUseCase";

export class ViewImagesController {
    
    constructor(readonly viewImagesUseCase: ViewImagesUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const images = await this.viewImagesUseCase.execute();
            res.status(200).send(images);
        } catch (error) {
            console.error("Error al obtener imágenes:", error);
            res.status(500).send({ message: "Error al obtener imágenes" });
        }
    }
}
