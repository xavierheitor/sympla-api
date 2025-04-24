import { Request, Response } from 'express';

export class EquipamentoController {
    public static async getEquipamentos(req: Request, res: Response): Promise<void> {
        res.json([
            {
                id: 1,
                nome: 'Compressor A',
                descricao: 'Compressor de ar modelo A',
                grupo_defeito_id: 1,
                subgrupo_defeito_id: 1,
            },
            {
                id: 2,
                nome: 'Gerador B',
                descricao: 'Gerador elétrico modelo B',
                grupo_defeito_id: 2,
                subgrupo_defeito_id: 2,
            },
        ]);
    }
}