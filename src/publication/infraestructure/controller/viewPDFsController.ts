import { Request, Response } from "express";
import { ViewPDFsUseCase } from "../../application/viewPDFsUseCase";

export class ViewPDFsController {
    
    constructor(readonly viewPDFsUseCase: ViewPDFsUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const pdfs = await this.viewPDFsUseCase.execute();
            res.status(200).send(pdfs);
        } catch (error) {
            console.error("Error al obtener PDFs:", error);
            res.status(500).send({ message: "Error al obtener PDFs" });
        }
    }
}
