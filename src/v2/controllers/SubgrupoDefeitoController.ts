import { Request, Response } from 'express';

export class SubgrupoDefeitoController {
    public static async getSubgruposDefeito(req: Request, res: Response): Promise<void> {
        res.json([
            {
                id: 1,
                nome: 'Vazamento',
                descricao: 'Vazamentos em componentes',
                grupo_defeito_id: 1,
            },
            {
                id: 2,
                nome: 'Curto-circuito',
                descricao: 'Problemas de curto-circuito',
                grupo_defeito_id: 2,
            },
        ]);
    }
}