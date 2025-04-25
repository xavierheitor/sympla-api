import { Request, Response } from 'express';

export class GrupoDefeitoController {
    public static async getGruposDefeito(req: Request, res: Response): Promise<void> {
        res.json([
            {
                id: 1,
                uuid: 'uuid-1',
                nome: 'Mecânico',
                descricao: 'Defeitos mecânicos',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                uuid: 'uuid-2',
                nome: 'Elétrico',
                descricao: 'Defeitos elétricos',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    }
}