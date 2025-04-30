import { Request, Response } from 'express';

export class TecnicosV2Controller {
    public static async getTecnicos(_: Request, res: Response): Promise<void> {
        res.json([
            {
                id: 1,
                uuid: 'uuid-tecnico-1',
                nome: 'João Silva',
                matricula: '123456',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                id: 2,
                uuid: 'uuid-tecnico-2',
                nome: 'Maria Oliveira',
                matricula: '654321',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                id: 3,
                uuid: 'uuid-tecnico-3',
                nome: 'Carlos Souza',
                matricula: '987654',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
        ]);
    }
}