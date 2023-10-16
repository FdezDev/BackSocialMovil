import { Request, Response } from "express";
import { UserPublicationUseCase } from "../../application/userPublicationUserCase";
import multer from 'multer';
import * as admin from 'firebase-admin';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export class UserPublicationController {
    constructor(readonly userPublicationUseCase: UserPublicationUseCase) { }

    async run(req: Request, res: Response) {
        try {
            upload.single('multimedia')(req, res, async (err) => {
                if (err) {
                    return res.status(400).send({ status: "error", message: "Error al subir multimedia." });
                }

                let { userId, description, multimedia } = req.body;

                if (req.file) {
                    const bucket = admin.storage().bucket();
                    const blob = bucket.file(req.file.originalname);
                    const blobStream = blob.createWriteStream();

                    blobStream.on('error', (err: any) => {
                        console.error('Error al subir archivo:', err);
                        return res.status(500).send({ status: "error", message: "Error al subir multimedia a Firebase." });
                    });

                    blobStream.on('finish', async () => {
                        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/backsocialmovil.appspot.com/o/${encodeURI(blob.name)}?alt=media`;

                        let createdPublication = await this.userPublicationUseCase.run(userId, description, publicUrl);

                        if (createdPublication) {
                            return res.status(201).send({
                                status: "success",
                                data: {
                                    description: createdPublication.description,
                                    multimedia: publicUrl
                                },
                                message: "Publicación creada exitosamente."
                            });
                        } else {
                            return res.status(400).send({
                                status: "error",
                                data: [],
                                validations: [], // TODO: implementar validaciones
                                message: "Error al crear la publicación, intentalo más tarde."
                            });
                        }
                    });

                    blobStream.end(req.file.buffer);
                } else {
                    return res.status(400).send({ status: "error", message: "Se requiere multimedia." });
                }
            });
        } catch (error) {
            console.error("Error en PublicationController:", error);
            res.status(500).send({
                status: "error",
                message: "Error interno del servidor."
            });
        }
    }
}
