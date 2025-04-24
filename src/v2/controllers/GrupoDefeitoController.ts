import { Request, Response } from 'express';

export class GrupoDefeitoController {
    public static async getGruposDefeito(req: Request, res: Response): Promise<void> {
        res.json([
            {
                id: 1,
                nome: 'Mecânico',
                descricao: 'Defeitos mecânicos',
            },
            {
                id: 2,
                nome: 'Elétrico',
                descricao: 'Defeitos elétricos',
            },
        ]);
    }
}