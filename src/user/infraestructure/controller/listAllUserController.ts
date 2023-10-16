import { Request, Response } from "express";
import { ListAllUserUseCase } from "../../application/listAllUserUseCase";

export class ListAllUsersController {
    constructor(readonly listAllUserUseCase: ListAllUserUseCase) {}

    async run(req: Request, res: Response) {
        const users = await this.listAllUserUseCase.run();
        res.status(200).send(users);
    }
}