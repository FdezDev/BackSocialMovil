import * as admin from 'firebase-admin';

export class ViewVideosUseCase {

    async execute(): Promise<{name: string, downloadURL: string}[]> {
        const bucket = admin.storage().bucket();
        return new Promise((resolve, reject) => {
            bucket.getFiles(async (err, files) => {
                if (err) {
                    console.error("Error al obtener los archivos de Firebase:", err);
                    reject(err);
                    return;
                }
                
                if (!files) {
                    console.error("No se encontraron archivos.");
                    resolve([]);  // Devuelve un array vacío si no hay archivos.
                    return;
                }

                const videoFilesPromises = files.map(async file => {
                    const metadata = await file.getMetadata();
                    if (metadata[0].contentType && metadata[0].contentType.startsWith('video/')) {
                        try {
                            const [downloadURL] = await file.getSignedUrl({
                                action: 'read',
                                expires: '03-09-2491'
                            });
                            return {
                                name: file.name,
                                downloadURL: downloadURL
                            };
                        } catch (error) {
                            console.error("Error al obtener la URL de descarga:", error);
                            return null;
                        }
                    }
                    return null;
                });

                const videoFilesWithoutNull = await Promise.all(videoFilesPromises);
                const videoFiles = videoFilesWithoutNull.filter((file): file is { name: string; downloadURL: string; } => file !== null);
                resolve(videoFiles);
            });
        });
    }
}
