import { Request, Response } from 'express';

export class TipoAtividadeController {
    public static async getTiposAtividade(req: Request, res: Response): Promise<void> {
        res.json([
            {
                id: 1,
                nome: 'Inspeção',
                descricao: 'Atividade de inspeção',
            },
            {
                id: 2,
                nome: 'Manutenção',
                descricao: 'Atividade de manutenção',
            },
        ]);
    }
}